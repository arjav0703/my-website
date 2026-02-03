const social_list: Record<string, string> = {
  gmail: "mailto:arjavjain0703@gmail.com",
  github: "https://github.com/arjav0703",
  instagram: "https://www.instagram.com/arjav0703",
  linkedin: "https://www.linkedin.com/in/arjav-jain-219476333/",
};

export default function SocialIcons() {
  return (
    <section className="my-4 flex">
      {Object.keys(social_list).map((key) => (
        <NesIcon key={key} icon={key} url={social_list[key]} />
      ))}
    </section>
  );
}

function NesIcon({ icon, url }: { icon: string; url: string }) {
  return (
    <i
      className={`nes-icon ${icon} is-medium mx-5`}
      onClick={() => window.open(url, "_blank")}
    ></i>
  );
}
