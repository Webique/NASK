import Image from "next/image";

import { Link as I18nLink } from "@/i18n/navigation.public";
import { cn } from "@/lib/utils";

type indexProps = {
  src?: string;
  width?: number;
  height?: number;
  href?: string;
  className?: string;
  imgClassName?: string;
};

export default function Logo({
  src = "/images/logoo.png",
  width = 160,
  height = 160,
  className,
  imgClassName,
  href = "/"
}: indexProps) {
  return (
    <I18nLink
      href={href}
      aria-label="Logo"
      className={cn("flex items-center gap-2.5", className)}
    >
      <Image
        className={cn(
          "h-auto w-auto max-h-12 max-w-full overflow-hidden",
          imgClassName
        )}
        src={src}
        width={width}
        height={height}
        alt="Logo"
        priority
        unoptimized
      />
    </I18nLink>
  );
}
