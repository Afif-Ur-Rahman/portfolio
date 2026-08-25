import { Cross2Icon } from "@radix-ui/react-icons";
import { Flex, Text } from "@radix-ui/themes";
import { CheckIcon, CircleAlert, Clock3Icon } from "lucide-react";

import { cn } from "@/utils";

const Badge = ({
  label,
  type,
  addIcon = false,
  className,
}: {
  label: string;
  type: string;
  addIcon?: boolean;
  className?: string;
}) => {
  const getBadgeColor = () => {
    switch (type) {
      case "success":
        return "border-[#30A46C]/20 bg-[#30A46C]/10 text-[#30A46C]";
      case "warning":
        return "border-[#99543A]/20 bg-[#99543A]/10 text-[#99543A]";
      case "danger":
        return "border-[#E5484D]/20 bg-[#E5484D]/10 text-[#E5484D]";
      case "basic":
        return "border-[#60646C]/20 bg-[#60646C]/10 text-[#60646C]";
      case "highContrast":
        return "border-[#194595] bg-[#194595] text-[white]";
      case "info":
        return "border-pp-info-1/20 bg-pp-info-1/10 text-pp-info-1";
      case "disabled":
        return "border-pp-gray-1/20 bg-pp-gray-1/10 text-pp-gray-1";
      case "gold":
        return "border-[#DAB025]/20 bg-[#DAB025]/10 text-[#DAB025]";
      case "navy":
        return "border-[#09113F]/20 bg-[#09113F]/10 text-[#09113F]";
    }
  };

  return (
    <Flex
      className={cn(
        "rounded-6 font-regular items-center rounded-xl border px-2 py-0.5 text-[12px]",
        getBadgeColor(),
        className,
      )}
      align="center"
      justify="center"
      gap="1"
    >
      {addIcon && <Icon type={type} label={label} />}

      <Text className="whitespace-nowrap">{label}</Text>
    </Flex>
  );
};

const Icon = ({ type, label }: { type: string; label: string }) => {
  switch (type) {
    case "success":
      return <CheckIcon height="14" width="14" strokeWidth={2.5} color="green" />;
    case "danger":
      return <Cross2Icon height="14" width="14" color="#E5484D" />;

    case "warning":
      if (label.toLocaleLowerCase() === "pending")
        return <Clock3Icon height="14" width="14" color="#99543A" />;
      return <CircleAlert height="14" width="14" color="#99543A" />;
  }
};

export { Badge };
