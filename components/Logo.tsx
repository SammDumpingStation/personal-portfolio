interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <svg
      className={className}
      width="162"
      height="140"
      viewBox="0 0 162 140"
      fill="none"
      {...props}
    >
      <rect width="162" height="30" rx="15" fill="currentColor" />
      <rect y="55" width="162" height="30" rx="15" fill="currentColor" />
      <rect y="110" width="162" height="30" rx="15" fill="currentColor" />
      <path
        d="M162 70C162 61.7157 155.284 55 147 55V55C138.716 55 132 61.7157 132 70V125C132 133.284 138.716 140 147 140V140C155.284 140 162 133.284 162 125V70Z"
        fill="currentColor"
      />
    </svg>
  );
}
