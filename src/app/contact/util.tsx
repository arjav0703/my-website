interface ContactSectionProps {
  icon: string;
  title: string;
  titleColor: string;
  buttonColor: string;
  href: string;
  label: string;
  external?: boolean;
}

function ContactSection({
  icon,
  title,
  titleColor,
  buttonColor,
  href,
  label,
  external = false,
}: ContactSectionProps) {
  return (
    <section className="nes-container is-dark is-rounded">
      <div className="flex items-center gap-3 mb-4">
        <i className={`nes-icon is-medium ${icon}`}></i>
        <span className={`nes-text ${titleColor} text-xl`}>{title}</span>
      </div>
      <a
        href={href}
        className={`nes-btn ${buttonColor}`}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {label}
      </a>
    </section>
  );
}

function EmailSection() {
  return (
    <ContactSection
      icon="gmail"
      title="Email"
      titleColor="is-primary"
      buttonColor="is-primary"
      href="mailto:arjavjain0703@gmail.com"
      label="arjavjain0703@gmail.com"
    />
  );
}

function DiscordSection() {
  return (
    <ContactSection
      icon="star"
      title="Discord"
      titleColor="is-success"
      buttonColor="is-warning"
      href="https://discordapp.com/users/1265239979143987273"
      label="@madmax000108"
      external
    />
  );
}

export { DiscordSection, EmailSection };
