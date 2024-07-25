import ProfileCardServer from "@/components/Profile/ProfileCard.server";
import ProfileHeader from "@/components/Profile/ProfileHeader";

const Profile = () => {
  return (
    <div className="flex md:p-8 sm:p-7 p-5 size-full flex-col">
      <ProfileHeader />
      <ProfileCardServer />
    </div>
  );
};

export default Profile;

// import { auth } from "@clerk/nextjs";
// import Image from "next/image";
// import { redirect } from "next/navigation";

// import { Collection } from "@/components/Collections";
// import Header from "@/components/Header";
// import { getUserImages } from "@/lib/actions/image.actions";
// import { getUserById } from "@/lib/actions/user.actions";

// const Profile = async ({ searchParams }: SearchParamProps) => {
//   const page = Number(searchParams?.page) || 1;
//   const imagesPerPage = 10; // Number of images per page
//   const { userId } = auth();

//   if (!userId) redirect("/sign-in");

//   const user = await getUserById(userId);
//   const { data: allImages, totalPages: totalImages } = await getUserImages({ userId: user._id });

//   // Paginate results
//   const startIndex = (page - 1) * imagesPerPage;
//   const paginatedImages = allImages.slice(startIndex, startIndex + imagesPerPage);
//   const totalPages = Math.ceil(totalImages / imagesPerPage);

//   return (
//     <div className="flex flex-col w-full">
//       <Header title="Profile" />
//       <section className="profile">
//         <div className="profile-balance">
//           <p className="p-14-medium md:p-16-medium">CREDITS AVAILABLE</p>
//           <div className="mt-4 flex items-center gap-4">
//             <Image
//               src="/assets/icons/coins.svg"
//               alt="coins"
//               width={50}
//               height={50}
//               className="size-9 md:size-12"
//             />
//             <h2 className="h2-bold text-dark-600">{user.creditBalance}</h2>
//           </div>
//         </div>

//         <div className="profile-image-manipulation">
//           <p className="p-14-medium md:p-16-medium">IMAGE MANIPULATION DONE</p>
//           <div className="mt-4 flex items-center gap-4">
//             <Image
//               src="/assets/icons/photo.svg"
//               alt="coins"
//               width={50}
//               height={50}
//               className="size-9 md:size-12"
//             />
//             <h2 className="h2-bold text-dark-600">{allImages.length}</h2>
//           </div>
//         </div>
//       </section>

//       <section className="mt-8 md:mt-14">
//         <Collection
//           images={paginatedImages}
//           totalPages={totalPages}
//           page={page}
//         />
//       </section>
//     </div>
//   );
// };

// export default Profile;
