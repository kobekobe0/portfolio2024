import type { ReactNode } from "react";

// Long-form writing. Bodies are plain JSX so each article is prerendered to static HTML.

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  dateLabel: string;
  body: ReactNode;
};

export const articles: Article[] = [
  {
    slug: "isekai-story",
    title: "Isekai Story: Being Isekaid in to the Realm of Software",
    description:
      "How Kobe got into software, year by year from a high school web project in 2019 to leading a team in 2024, told as an isekai.",
    date: "2024-01-05",
    dateLabel: "5 January 2024",
    body: (
      <>
      <h2>A Typical Child with No Childhood (!Just kidding) </h2>
      <p>
      As a kid, I was always fascinated by the world of
      technology. I remember spending hours on the computer,
      playing video games, and exploring the Internet. I was
      so curious; I thought I could fix my sibling's broken
      toys by just typing some magical code into the keyboard.
      </p>
      <h3>Timeline</h3>
      <hr />
      <h4>2019 - A Glimpse of the Web World</h4>
      <p>
      In 2019, I completed my final project in basic web
      development (High School). It was like getting hit by
      Truck-kun and after dy**g you got transported to a
      magical world with wild beast, elves, humans that hate
      demon (they're narcissist), magics, and other typical
      anime stuff.
      <br />
      <br />
      Typically, isekaied people are given a cheat ability,
      but in my case, I was given a level one armor, a level
      one sword, and a overall stat of 1. At that time, I
      thought that I'm overpowered but I was wrong. Looking
      back, I was like a level one adventurer that got lost in
      the forest.
      </p>
      <h4>2020 - Navigating a Pandemic and College</h4>
      <p>
      2020, the year the world went virtual, and so did my
      dreams of becoming a web wizard. With more time on my
      hands, I decided to dive into web development with the
      enthusiasm of a puppy chasing its tail. College? Oh,
      that's just the place where I learned that "404 Not
      Found" isn't just a webpage error; it's also a state of
      mind.
      <br />
      <br />I extend my gratitude to Sir Renzo, who explained
      backend development to me. At first, I felt like a fish
      trying to understand algebra, but eventually, it all
      clicked. I guess you could say I went from backend
      bafflement to backend brilliance.
      </p>
      <h4>2021 - Building, Learning, and Transitioning</h4>
      <p>
      Ah, behold the epic saga of my coding evolution – the
      year of wild experiments! I unleashed a battalion of
      small projects, some so nonsensical they'd make a rubber
      chicken blush. It was like trying to teach my computer
      to moonwalk – an ambitious endeavor with questionable
      results.
      <br /> <br /> Feeling the need for a skill set more
      robust than a bodybuilder at a protein buffet, I bravely
      dove into the enigmatic realm of backend development.
      Picture me as a digital alchemist, concocting simple
      full-stack websites that laid the foundation for my
      metamorphosis into a full-stack maestro. <br />
      <br />
      It was a journey where my code went from "Hello, World!"
      to "Greetings, Earthlings, behold my digital
      masterpiece!" Because, you see, in the realm of coding,
      we don't just build websites; we craft digital
      symphonies. And my keyboard? Well, it became the wand I
      never knew I needed – casting spells in the language I
      myself can't even comprehend.
      </p>
      <h4>2022 - The Job Hunt and a Breakthrough</h4>
      <p>
      Confidence soaring, I applied for jobs in 2022.
      Rejections hit me harder than a boulder that hit my face
      because I can't stop it from falling due to my not so
      overpowered spells. But in October, Sir Steve gave me a
      chance as a part-time backend developer. It was a
      breakthrough! I felt like a coding superhero, with a
      cape made of spaghetti code, ready to save the digital
      world.
      </p>
      <h4>2023 - Ups and Downs, Loss and Gain</h4>
      <p>
      In 2023, I lost contact with Sir Steve, and my job went
      "poof." Job hunt round two commenced. Found Sir Zach on
      Facebook, and now I lead a team building software. It's
      like a game of digital chess, and I'm the reluctant
      grandmaster who sometimes moves the pawn backward.
      </p>
      <h4>2024 - Navigating New Horizons</h4>
      <p>
      Now, in 2024, I'm at a crossroads, like a GPS unsure if
      I should turn left, right, or just scream
      "recalculating." My current job has been like a roller
      coaster, but more loops and fewer cotton candies. Still,
      I'm thankful for the experience, even if my code
      sometimes rebels against me like a rebellious teenager.
      </p>
      <hr />
      <h3>Lessons Learned</h3>
      <p>
      As I reflect on my turbulent journey through the matrix,
      it's become abundantly clear that my relationship with
      programming is a rollercoaster of passion, perseverance,
      and the occasional existential crisis. Programming, you
      see, is not just about crafting code; it's about
      sculpting digital legacies that'll either soar to
      greatness or spectacularly crash and burn. It's like
      playing chess with a computer – you make a move, it
      makes a thousand calculations, and suddenly, checkmate,
      your sanity. <br />
      <br />
      Being part of the coding cult is akin to joining a
      secret society, where the password is a complex
      algorithm, and initiation involves debugging a thousand
      lines of someone else's spaghetti code. We support and
      inspire each other, not out of sheer goodwill, but
      because deep down, we're all in this together. Misery
      loves company, especially when you're grappling with
      APIs. <br />
      <br />
      In the realm of programming, challenges are not mere
      hurdles; they're towering infernos, and victories are as
      rare as a bug-free codebase. We don't celebrate
      victories; we cautiously whisper a "finally" and brace
      ourselves for the next impending disaster. <br />
      <br />
      Taking breaks is not just an option; it's a survival
      tactic. Picture this: You, hunched over a keyboard,
      fueled by caffeine and determination, reaching a
      breaking point where even the coffee mug judges your
      life choices. It's okay to feel overwhelmed – in fact,
      it's the default emotion. Questioning your abilities is
      not a phase; it's a perpetual state of self-doubt that
      accompanies every semicolon. <br />
      <br />
      Mistakes? Oh, they're not just okay; they're practically
      mandatory. In coding, we don't call them mistakes; we
      call them "undocumented features." Learning from them is
      not a choice; it's a survival instinct. It's like
      evolving in the coding Darwinian jungle – adapt or face
      extinction. <br />
      <br />
      And the grand revelation? The journey matters more than
      the destination – a revelation akin to realizing your
      GPS is eternally confused. The lessons learned along the
      way are not profound wisdom; they're survival tips
      shared in hushed code whispers. The people you meet?
      They're fellow wanderers in the vast expanse of error
      messages and debugging nightmares, making the journey
      feel like a coding support group meeting with a hint of
      dark humor. Cheers to the journey, the bugs, and the
      relentless pursuit of the elusive bug-free code – a
      pursuit as futile as trying to divide by zero.
      </p>
      <img src="/images/writing/isekai-story.webp" alt="Phone screenshot of an anime list website Kobe built as a student, shared as a story" width={750} height={1334} loading="lazy" />
      </>
    ),
  },
  {
    slug: "work-life-balance",
    title: "Work-Life Balance: A Survival Guide for the Code-Wielding Collegiate Gladiator",
    description:
      "Tips, some of them serious, on balancing part-time development work with college.",
    date: "2023-12-15",
    dateLabel: "15 December 2023",
    body: (
      <>
      <h2>Greetings, valiant code warriors!</h2>
      <p>
      If you're here, you're probably a part-time developer
      and a full-time student, bravely wading through the
      treacherous waters of lectures, exams, and an ocean of
      code. Welcome to the chaotic circus – the Big Top of
      bugs and textbooks.
      </p>
      <p className="lede">
      Being a 20-year-old college student and a full-stack
      developer is like juggling flaming bowling pins –
      exhilarating, but one wrong move, and it's a spectacular
      disaster. Fear not, for I, your humble guide through
      this code-filled carnival, present survival tips fresh
      from the trenches:
      </p>
      <p>
      You've got lectures to attend, exams to cram for, and a
      mountain of code waiting for your magic touch. So, how
      do you navigate this crazy rollercoaster ride without
      losing your sanity? Here are a few survival tips from
      someone who's in the trenches with you:
      </p>
      <h4>Master the Art of Time Management</h4>
      <p>
      Time, the elusive currency of our existence. As a
      part-time coding sorcerer and student, you must become a
      time management ninja. Invest in a planner, wield
      productivity apps like a magic wand, and craft a
      schedule that keeps you from turning into a
      sleep-deprived zombie with a caffeine addiction.
      </p>
      <h4>Prioritize Your Tasks</h4>
      <p>
      Not all tasks are born equal. Identify the high-priority
      monsters on your to-do list and slay them first. Whether
      it's a monstrous project deadline or an impending exam
      doom, chop those tasks into bite-sized pieces and
      conquer them with the finesse of a seasoned warrior.
      </p>
      <h4>Embrace the Power of No</h4>
      <p>
      As much as we'd love to be the social butterflies
      fluttering to every gathering, sometimes you've got to
      shut that butterfly down. Learn to say no, for the sake
      of your sanity. Decline those invitations like a boss,
      because FOMO is nothing compared to FOLO (Fear of Losing
      Out on life).
      </p>
      <h4>Find Your Productivity Sweet Spot</h4>
      <p>
      Discover when you're the most productive – whether it's
      when the sun's still debating its presence or during the
      eerie silence of the midnight hour. Tailor your work and
      study sessions accordingly, and let the productivity
      magic flow like a potion in your coding cauldron.
      </p>
      <h4>Create a Dedicated Workspace</h4>
      <p>
      Designate a kingdom for your code quests and study
      battles. It could be a cozy corner in your room or a
      coffee shop where the baristas know your coding
      preferences. Having a designated workspace signals to
      your brain that it's time to unleash the code-beast
      within.
      </p>
      <h4>Seek Support and Delegate</h4>
      <p>
      You're not Gandalf fighting the Balrog alone. Reach out
      to your fellowship – classmates, colleagues, or even
      your coding Gandalf (professor). Delegate tasks, seek
      support, and remember, Frodo had Sam, and you've got
      your coding companions.
      </p>
      <h4>Celebrate Small Wins</h4>
      <p>
      In this fast-paced circus of academia and coding chaos,
      don't forget to applaud the small victories.
      Successfully debugged a code labyrinth? Aced an exam
      that felt like an orc onslaught? Celebrate! It's the
      fuel your morale needs to keep the fire burning.
      </p>
      <p>
      Remember, you're not alone in this code-infested
      labyrinth. Many of us are navigating the same
      work-college-life circus, attempting to find balance
      amidst the chaos. So, keep coding, stay focused, and
      take breaks – because even the most skilled warriors
      need a moment to sip from the cup of sanity. You've got
      this, brave gladiator of the code arena!
      </p>
      <img src="/images/writing/work-life-balance.webp" alt="Kobe coding at a desk in a dark room, lit by the monitor" width={750} height={421} loading="lazy" />
      </>
    ),
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
