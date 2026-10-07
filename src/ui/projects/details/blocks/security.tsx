import { ShieldCheck, Zap } from "lucide-react";

type InfoBlock = {
  label: string;
  detail: string;
};

type ProjectSecurityAutomationProps = {
  security: InfoBlock;
  automation: InfoBlock;
};

export const SecurityAutomation = ({ security, automation }: ProjectSecurityAutomationProps) => {
  return (
    <section id="security" className="w-full py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-3">
          <h2 className="font-display text-3xl leading-[1.05] font-normal tracking-tight text-[#003B73] md:text-6xl">
            Security & Automation
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DAB025]/10 text-[#DAB025]">
                <ShieldCheck size={20} />
              </span>
              <h3 className="font-display text-2xl font-normal text-[#003B73]">{security.label}</h3>
            </div>
            <p className="mt-3 text-[15px] leading-6 text-gray-600">{security.detail}</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DAB025]/10 text-[#DAB025]">
                <Zap size={20} />
              </span>
              <h3 className="font-display text-2xl font-normal text-[#003B73]">
                {automation.label}
              </h3>
            </div>
            <p className="mt-3 text-[15px] leading-6 text-gray-600">{automation.detail}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
