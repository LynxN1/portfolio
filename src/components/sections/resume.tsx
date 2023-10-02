import SectionLayout from "@/components/section-layout";
import SectionHeading from "@/components/section-heading";

function Resume() {
  return (
    <SectionLayout name="resume">
      <SectionHeading text="Resume" backgroundText="Summary" />
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">My Education</h1>
        <div className="flex flex-col items-start gap-2 rounded-md bg-gray-900 p-7">
          <span className="rounded-md bg-indigo-600 px-2 py-1 text-sm">2018-2019</span>
          <h1 className="text-xl">Web Development</h1>
          <p className="text-sm tracking-tighter text-indigo-500">IT Future School</p>
        </div>
        <div className="flex flex-col items-start gap-2 rounded-md bg-gray-900 p-7">
          <span className="rounded-md bg-indigo-600 px-2 py-1 text-sm">2019-2022</span>
          <h1 className="text-xl">Bachelor of Computer Science</h1>
          <p className="text-sm tracking-tighter text-indigo-500">National Transport University</p>
        </div>
        <div className="flex flex-col items-start gap-2 rounded-md bg-gray-900 p-7">
          <span className="rounded-md bg-indigo-600 px-2 py-1 text-sm">2022-2024</span>
          <h1 className="text-xl">Master Degree of Computer Science</h1>
          <p className="text-sm tracking-tighter text-indigo-500">National Transport University</p>
        </div>
      </div>
    </SectionLayout>
  );
}

export default Resume;
