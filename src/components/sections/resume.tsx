import SectionLayout from "@/components/section-layout";
import ProgressBar from "@/components/ui/progress-bar";

function Resume() {
  return (
    <SectionLayout name="resume">
      <SectionLayout.Heading text="Resume" backgroundText="Summary" />
      <div className="flex flex-col gap-4">
        <h1 className="mb-2 text-2xl font-bold">My Education</h1>
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
        <h1 className="my-2 text-2xl font-bold">My Skills</h1>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ProgressBar title="Web development" percent={93} />
          <ProgressBar title="Software development" percent={53} />
          <ProgressBar title="Android development" percent={29} />
          <ProgressBar title="Linux administration" percent={72} />
          <ProgressBar title="Database administration" percent={68} />
          <ProgressBar title="Node.js" percent={82} />
          <ProgressBar title="REST API" percent={80} />
          <ProgressBar title="Reverse engineering" percent={13} />
          <ProgressBar title="Python" percent={76} />
          <ProgressBar title="PHP" percent={28} />
          <ProgressBar title="Java" percent={37} />
          <ProgressBar title="Web Design" percent={20} />
        </div>
      </div>
    </SectionLayout>
  );
}

export default Resume;
