import { redirect } from 'next/navigation';
import { v2 as cloudinary } from 'cloudinary';

import CldImage from '@/components/gallery/CldImage';
import Form from '@/components/forms/Form';
import { getProjects } from '@/lib/projects';
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function Home({ searchParams }: { searchParams: any }) {
  const query = searchParams.query;

  let expression = 'folder=work';

  if (query) {
    expression = `${expression} AND ${query}`;
  }

  const { resources } = await cloudinary.search
    .expression(expression)
    .execute();
  console.log(resources);
  const search = async (data: FormData) => {
    'use server';
    redirect(`/?query=${data.get('query')}`);
  };

  return (
    <main className='dashboard'>
      <div className='container'>
        <Form />
        {/* <form
          action={search}
          className='relative mb-4 flex w-full flex-wrap items-stretch'
        >
          <input
            name='query'
            type='search'
            style={{ height: '2rem' }}
            className='h-4 relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary'
            placeholder='Search'
            aria-label='Search'
            aria-describedby='button-addon2'
          />
          <span
            className='input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-sm font-normal text-neutral-700 dark:text-neutral-200'
            id='basic-addon2'
          >
            <svg
              style={{ height: '2rem', width: '2rem' }}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </form> */}
      </div>
      {/* <div className='container mx-auto px-5 py-2 lg:px-32 lg:pt-12'>
        <div className='-m-1 flex flex-wrap md:-m-2'>
          {resources.map((resource: any) => {
            return (
              <div key={resource.public_id} className='flex w-1/4 flex-wrap'>
                <div className='w-full p-1 md:p-2'>
                  <CldImage
                    style={{ height: 500, width: 500 }}
                    className='block h-full w-full rounded-lg object-cover object-center'
                    width={resource.width}
                    height={resource.height}
                    src={resource.secure_url}
                    alt=''
                    sizes='25vw'
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
    </main>
  );
}
