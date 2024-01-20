import React from "react";
import { TextBlock } from "../../../components/typography";

const CodingActivity = () => {
  return (
    <div className="">
      <div className="section__title section__title__new">
        MY CODING ACTIVITY
      </div>
      <TextBlock spacing={[40, 25]}>
        I use WakaTime to track my coding activity. It's a great tool to track
        your coding activity and helps you improve your productivity. It's
        facinating how IDE's have evolved over the years.
        <p></p>I started with Notepad++, then moved to Visual Studio, and now I
        am using VSCode and NeoVim. Tracking time helps me to understand how
        much time I spend on each project and helps me to improve my
        productivity.
      </TextBlock>
      <div className="coding-activity">
        <figure>
          <embed src="https://wakatime.com/share/@c2883fa9-c937-4e8e-8956-e5b47d6dbf96/ff4a5ca7-7dee-4ef7-b7e2-af05dcea72f0.svg"></embed>
        </figure>
      </div>

      <div className="section section__title section__title__new">
        Top Languages
      </div>
      <TextBlock spacing={[40, 25]}>
        <p>
          WakaTime illuminates my coding landscape, presenting insightful charts
          of my top programming languages. It's a visual journey through
          efficiency, revealing my coding symphony in a glance. The 'Other'
          category? A mysterious realm encompassing terminal prowess,
          alternative IDE wizardry, and untracked coding adventures.
        </p>
      </TextBlock>
      <div className="coding-activity">
        <figure>
          <embed src="https://wakatime.com/share/@samuellawrentz/adc4c8e6-679b-435c-becf-3d5a6f5b3f11.svg"></embed>
        </figure>
      </div>
      <div className="section">
        <div className="section__title section__title__new">CALENDER</div>
        <figure className="dark-calendar">
          <embed src="https://wakatime.com/share/@samuellawrentz/f67c01db-1f8f-406e-8778-8f7f93b46ca0.svg"></embed>
        </figure>
        <figure className="light-calendar">
          <embed src="https://wakatime.com/share/@samuellawrentz/806d095c-43c0-4d91-ae0c-da554d141dcf.svg"></embed>
        </figure>
      </div>
      <p>
        Will revisit this page when I have time. Right now, the design looks
        miserable.
      </p>
    </div>
  );
};

export default CodingActivity;
