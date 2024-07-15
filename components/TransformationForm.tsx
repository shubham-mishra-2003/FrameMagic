"use client";

import React, { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { aspectRatioOptions, defaultValues, toolType } from "@/constants";
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
  const [isTransforming, setTransforming] = useState(false);
  const [transformationConfig, setTransformationConfig] = useState(config);

  const [isPending, startTransition] = useTransition()

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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

      return onChangeField(value);
    }, 1000);
  };

  const onTranformHandler = async () => {
    setTransforming(true)

    setTransformationConfig(
      deepMergeObjects(newTransformation, transformationConfig)
    )

    setNewTransformation(null)

    startTransition(async ()=> {
      // await updateCredits(userId, creditFee)
    })
  };


  const { resolvedTheme } = useTheme();

  if(Loading) return <PageLoading />

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-5 flex gap-4 flex-col"
      >
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

        <div className="">
          <CustomField control={form.control} name="publicId" className="flex size-full flex-col" render={({field}) => (
            <MediaUploader onValueChange = {field.onChange} setImage = {setImage} publicId={field.value} image = {image} type = {type} />
          )} />
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
    <div className="flex flex-col h-full w-full bg-black gap-4">
      <div className="h-16 bg-slate-200 w-full animate-pulse rounded-full"></div>
      <div className="h-16 bg-slate-200 w-full animate-pulse rounded-full"></div>
      <div className="h-16 bg-slate-200 w-full animate-pulse rounded-full"></div>
      <div className="h-16 bg-slate-200 w-full animate-pulse rounded-full"></div>
      <div className="h-16 bg-slate-200 w-full animate-pulse rounded-full"></div>
    </div>
  )
}