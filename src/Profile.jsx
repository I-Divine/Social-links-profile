export function Profile({ avatar }) {
  return (
    <div className=" bg-neutral-800   w-max p-7 my-10 rounded">
      <div className=" flex items-center justify-center">
        <img src={avatar} className=" rounded-full w-20" alt="" />
      </div>
      <div className=" text-center">
        <p className=" text-white font-sans text-xl font-bold">
          Igwedinma Ifechukwu
        </p>
        <p className=" text-lime-300 font-sans font-semibold">Lagos, Nigeria</p>
        <p className=" text-white font-sans py-5">
         Software Engineer | React, NextJs | Java, Springboot
        </p>
        <a
          href="https://github.com/I-Divine"
          className=" bg-neutral-700 font-sans text-white text font-semibold my-3 py-1 block rounded hover:bg-lime-500 hover:text-black"
        >
          Github
        </a>
        <a
          href="https://www.frontendmentor.io/profile/I-Divine"
          className=" bg-neutral-700 font-sans text-white text font-semibold my-3 py-1 block rounded hover:bg-lime-500 hover:text-black"
        >
          Frontend Mentor
        </a>
        <a
          href="https://www.linkedin.com/in/divine-i/"
          className=" bg-neutral-700 font-sans text-white text font-semibold my-3 py-1 block rounded hover:bg-lime-500 hover:text-black"
        >
          Linkedin
        </a>
        <a
          href="https://x.com/IgwedinmaI"
          className=" bg-neutral-700 font-sans text-white text font-semibold my-3 py-1 block rounded hover:bg-lime-500 hover:text-black"
        >
          Twitter
        </a>
        <a
          href="#"
          className=" bg-neutral-700 font-sans text-white text font-semibold my-3 py-1 block rounded hover:bg-lime-500 hover:text-black"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}
