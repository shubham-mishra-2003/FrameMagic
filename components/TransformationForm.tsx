"use client";

import React, { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { aspectRatioOptions, creditFee, defaultValues, toolType } from "@/constants";
import { CustomField } from "./CustomField";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "./ui/select";
import { AspectRatioKey, debounce, deepMergeObjects } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import MediaUploader from "./MediaUploader";
import TransformedImage from "./TransformedImage";
import { updateCredits } from "@/lib/actions/user.actions";
import { getCldImageUrl } from "next-cloudinary";
import { addImage, updateImage } from "@/lib/actions/image.actions";
import { useRouter } from "next/navigation";
import { InsufficientCredits } from "./InsufficientCredits";

export const formSchema = z.object({
  title: z.string(),
  aspectRatio: z.string().optional(),
  color: z.string().optional(),
  prompt: z.string().optional(),
  publicId: z.string()
});

const TransformationForm = ({
  action,
  data = null,
  userId,
  type,
  creditBalance,
  config = null
}: TransformationFormProps) => {

  const [Loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(false)
  }, [])

  const toolsType = toolType[type];

  const [image, setImage] = useState(data);
  const [
    newTransformation,
    setNewTransformation
  ] = useState<Transformations | null>(null);

  const [isSubmitting, setSubmitting] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);
  const [transformationConfig, setTransformationConfig] = useState(config);

  const [isPending, startTransition] = useTransition()

  const router = useRouter();

  const { resolvedTheme } = useTheme();

  const initialValues =
    data && action === "Update"
      ? {
          title: data?.title,
          aspectRatio: data?.aspectRatio,
          color: data?.color,
          prompt: data?.prompt,
          publicId: data?.publicId
        }
      : defaultValues;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true);

    if(data || image) {
      const transformationUrl = getCldImageUrl({
        width: image?.width,
        height: image?.height,
        src: image?.publicId,
        ...transformationConfig
      })

      const imageData = {
        title: values.title,
        publicId: image?.publicId,
        transformationType: type,
        width: image?.width,
        height: image?.height,
        config: transformationConfig,
        secureURL: image?.secureURL,
        transformationURL: transformationUrl,
        aspectRatio: values.aspectRatio,
        prompt: values.prompt,
        color: values.color,
      }

      if(action === 'Add') {
        try {
          const newImage = await addImage({
            image: imageData,
            userId,
            path: '/'
          })

          if(newImage) {
            form.reset()
            setImage(data)
            router.push(`/tools/${newImage._id}`)
          }
        } catch (error) {
          console.log(error);
        }
      }

      if(action === 'Update') {
        try {
          const updatedImage = await updateImage({
            image: {
              ...imageData,
              _id: data._id
            },
            userId,
            path: `/tools/${data._id}`
          })
          if(updatedImage) {
            router.push(`/tools/${updatedImage._id}`)
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    setSubmitting(false)
  }

  const onSelectFieldHandler = (
    value: string,
    onChangeField: (value: string) => void
  ) => {
    const imageSize = aspectRatioOptions[value as AspectRatioKey]

    setImage((prevState: any) => ({
      ...prevState,
      aspectRatio: imageSize.aspectRatio,
      widht: imageSize.width,
      height: imageSize.height,
    }))

    setNewTransformation(toolsType.config);

    return onChangeField(value);
  };

  const onInputChangeHandler = (
    fieldName: string,
    value: string,
    type: string,
    onChangeField: (value: string) => void
  ) => {
    debounce(() => {
      setNewTransformation((prevState: any) => ({
        ...prevState,
        [type]: {
          ...prevState?.[type],
          [fieldName === 'prompt' ? 'prompt' : 'to'] : value
        }
      }))
    }, 1000)();
    
    return onChangeField(value);
  };

  const onTranformHandler = async () => {
    setIsTransforming(true)

    setTransformationConfig(
      deepMergeObjects(newTransformation, transformationConfig)
    )

    setNewTransformation(null)

    startTransition(async ()=> {
      await updateCredits(userId, creditFee)
    })
  };

  useEffect(()=>{
    if(image && (type === 'restore' || type === 'removeBackground')){
      setNewTransformation(toolsType.config)
    }
  }, [image, toolsType.config, type])

  if(Loading) return <PageLoading />

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-8 w-full flex gap-4 flex-col"
      >
        {creditBalance < Math.abs(creditFee) && <InsufficientCredits />}
        <CustomField
          control={form.control}
          name="title"
          formLabel="Image Title"
          className="w-full"
          render={({ field }) =>
            <Input {...field} className={`${resolvedTheme == "dark" ? 'text-white border-slate-700' : 'border-slate-300 text-black'} bg-transparent text-sm md:text-[16px] h-[52px] rounded-2xl border-2`} placeholder="My Photo..." />}
        />
        {type === "fill" &&
          <CustomField
            control={form.control}
            name="aspectRatio"
            formLabel="Aspect Ratio"
            className="w-full"
            render={({ field }) =>
              <Select
                onValueChange={value =>
                  onSelectFieldHandler(value, field.onChange)}
                value={field.value}
              >
                <SelectTrigger className="md:w-[180px] sm:w-[200px] w-full" >
                  <SelectValue placeholder="Select Size" />
                </SelectTrigger>
                <SelectContent className={`${resolvedTheme == "dark" ? 'bg-black' : 'bg-slate-100'}`}>
                  {Object.keys(aspectRatioOptions).map(key =>
                    <SelectItem
                      key={key}
                      value={key}
                      className={`cursor-pointer ${resolvedTheme === "dark"
                        ? "hover:bg-slate-700"
                        : "hover:bg-slate-300"}`}
                    >
                      {aspectRatioOptions[key as AspectRatioKey].label}
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>}
          />}

        {(type === "remove" || type === "recolor") &&
          <div className="gap-10 justify-between items-center flex">
            <CustomField
              control={form.control}
              name="prompt"
              formLabel={
                type === "remove" ? "Object to remove" : "Object to recolor"
              }
              className="w-full"
              render={({ field }) =>
                <Input 
                  className={`${resolvedTheme == "dark" ? 'text-white border-slate-700' : 'border-slate-300 text-black'} bg-transparent text-sm h-[52px] rounded-2xl md:text-[16px] border-2`}
                  value={field.value}
                  placeholder={type === "remove" ? "Remove the sun..." : "Recolor shirt..."}
                  onChange={e =>
                    onInputChangeHandler(
                      "prompt",
                      e.target.value,
                      type,
                      field.onChange
                    )}
                />}
            />

            {type === "recolor" &&
              <CustomField
                control={form.control}
                name="color"
                formLabel="Color Replacement"
                className="w-full"
                render={({ field }) =>
                  <Input
                    value={field.value}
                    className={`${resolvedTheme == "dark" ? 'text-white border-slate-700' : 'border-slate-300 text-black'} bg-transparent text-sm md:text-[16px] h-[52px] rounded-2xl border-2`}
                    placeholder="Change to blue..."
                    onChange={e =>
                      onInputChangeHandler(
                        "color",
                        e.target.value,
                        "recolor",
                        field.onChange
                      )}
                  />}
              />}
          </div>}

        <div className="grid h-fit min-h-72 grid-cols-1 gap-5 py-4 md:grid-cols-2">
          <CustomField control={form.control} name="publicId" className="flex size-full flex-col" render={({field}) => (
            <MediaUploader onValueChange = {field.onChange} setImage = {setImage} publicId={field.value} image = {image} type = {type} />
          )} />

          <TransformedImage
            image={image}
            type={type}
            title={form.getValues().title}
            isTransforming={isTransforming}
            setIsTransforming={setIsTransforming}
            transformationConfig={transformationConfig}
          />
        </div>
        
        <div className="flex flex-col gap-4 p-3 md:px-10">
          <Button
            disabled={isTransforming || newTransformation === null}
            onClick={onTranformHandler}
            className="bg-gradient-to-tr to-blue-600 from-violet-600 text-white p-7 font-bold text-lg rounded-full hover:to-violet-700 hover:from-blue-700 delay-75"
            type="submit"
          >
            {isTransforming ? 'Transforming...' : 'Apply'}
          </Button>
          <Button
            disabled={isSubmitting}
            className="bg-gradient-to-tr to-blue-600 from-violet-600 text-white p-7 font-bold text-lg rounded-full hover:to-violet-800 hover:from-blue-800 delay-75"
            type="submit"
          >
            {isSubmitting ? 'Submitting...' : 'Save Image'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default TransformationForm;

const PageLoading = () => {
  return(
    <div className="flex p-3 flex-col h-full w-full bg-black gap-4">
      <div className="h-16 bg-slate-200 w-full animate-pulse rounded-full"></div>
      <div className="h-16 bg-slate-200 w-full animate-pulse rounded-full"></div>
      <div className="h-16 bg-slate-200 w-full animate-pulse rounded-full"></div>
      <div className="h-16 bg-slate-200 w-full animate-pulse rounded-full"></div>
      <div className="h-16 bg-slate-200 w-full animate-pulse rounded-full"></div>
    </div>
  )
}
