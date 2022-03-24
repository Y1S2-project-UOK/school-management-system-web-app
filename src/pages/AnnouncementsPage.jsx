import AnnouncementCard from "../components/AnnouncementCard";

export default function AnnouncementsPage() {
  return (
    <div className="flex mt-5 flex-col items-center justify-center">
      <AnnouncementCard
        onTitleClick={() => console.log("clicked")}
        publisher_name="name"
        publish_date="2000-4-29"
        title="this is title"
        details="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is"
      />

      <AnnouncementCard
        onTitleClick={() => console.log("clicked")}
        publisher_name="name"
        publish_date="2000-4-29"
        title="this is title"
        details="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is"
      />

      <AnnouncementCard
        onTitleClick={() => console.log("clicked")}
        publisher_name="name"
        publish_date="2000-4-29"
        title="this is title"
        details="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is"
      />
      <AnnouncementCard
        onTitleClick={() => console.log("clicked")}
        publisher_name="name"
        publish_date="2000-4-29"
        title="this is title"
        details="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is"
      />
    </div>
  );
}
