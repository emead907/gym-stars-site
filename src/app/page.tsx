import React from "react"

const programs = [
  {
    title: "Preschool",
    age: "Ages 16 mos – 5 yrs",
    icon: "✿",
    color: "from-[#FCB442] to-[#FB8A4F]",
    img: "https://images.squarespace-cdn.com/content/v1/5ae2f1b925bf02d15e59d264/38f936a1-3f08-4b18-a5f1-8e5a79ef73aa/slime.png?format=750w",
  },
  {
    title: "Recreational Gymnastics",
    age: "Ages 4+",
    icon: "★",
    color: "from-[#EC6371] to-[#f77f91]",
    img: "https://images.squarespace-cdn.com/content/v1/5ae2f1b925bf02d15e59d264/d91a4dc9-ceda-4164-b2ec-eeb586bf83bf/girl+at+bars.png?format=2500w",
  },
  {
    title: "Tumbling",
    age: "Ages 5+",
    icon: "▰",
    color: "from-[#9B8FDB] to-[#6E7BC9]",
    img: "https://images.squarespace-cdn.com/content/v1/5ae2f1b925bf02d15e59d264/1678388643580-GXLSISAEN4M5OQ2S0028/IMG-0953.jpg?format=500w",
  },
  {
    title: "Ninja",
    age: "Ages 4+",
    icon: "✦",
    color: "from-[#4EA8C2] to-[#17A398]",
    img: "https://images.squarespace-cdn.com/content/v1/5ae2f1b925bf02d15e59d264/1678388643580-GXLSISAEN4M5OQ2S0028/IMG-0953.jpg?format=500w",
  },
  {
    title: "Team",
    age: "Invitation Only",
    icon: "🏆",
    color: "from-[#FB8A4F] to-[#F97316]",
    img: "https://images.squarespace-cdn.com/content/v1/5ae2f1b925bf02d15e59d264/d91a4dc9-ceda-4164-b2ec-eeb586bf83bf/girl+at+bars.png?format=2500w",
  },
  {
    title: "Summer Camp",
    age: "Ages 4+",
    icon: "☀",
    color: "from-[#4EA8C2] to-[#60A5FA]",
    img: "https://images.squarespace-cdn.com/content/v1/5ae2f1b925bf02d15e59d264/38f936a1-3f08-4b18-a5f1-8e5a79ef73aa/slime.png?format=750w",
  },
]

export default function Home() {
  return (
    <main className="bg-white font-sans text-[#17345f]">
      {/* HERO */}
      <section className="relative min-h-[620px] overflow-hidden bg-gradient-to-br from-white via-[#fff7f2] to-[#edf9fc] px-[6vw] py-[70px]">
        <div className="absolute -right-[260px] -bottom-[360px] z-0 h-[700px] w-[700px] rounded-full border-[34px] border-[#FCB442]/60" />
        <div className="absolute -left-[260px] -bottom-[300px] z-0 h-[520px] w-[520px] rounded-full border-[20px] border-[#4EA8C2]/20" />
        <div className="absolute right-20 top-20 h-52 w-52 rounded-full bg-[#EC6371]/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid min-h-[520px] max-w-[1250px] grid-cols-1 items-center gap-10 md:grid-cols-[.82fr_1.18fr]">
        <div>
  {/* HANDWRITTEN TAGLINE */}
  <p className="mb-3 text-[clamp(28px,3vw,44px)] font-bold italic text-[#EC6371] drop-shadow-sm">
    Boise’s Home for
  </p>

  {/* MAIN HEADLINE */}
  <h1 className="m-0 text-[clamp(52px,6vw,92px)] font-black uppercase leading-[.9] tracking-[-3px] text-[#003B80]">
    CONFIDENCE,
    <br />
    FRIENDS &
    <br />

    <span className="bg-gradient-to-r from-[#EC6371] via-[#FB8A4F] to-[#FCB442] bg-clip-text text-transparent">
      FUN!
    </span>
  </h1>

  <p className="my-[26px] max-w-[520px] text-lg font-semibold leading-[1.7] text-[#17345f]">
  Gymnastics, Ninja, Tumbling and Preschool programs for every age and ability
  </p>

  <div className="flex flex-wrap gap-4">
    <a
      href="#"
      className="inline-flex min-w-[170px] items-center justify-center rounded-full bg-[#EC6371] px-[30px] py-[18px] text-[15px] font-extrabold text-white no-underline shadow-[0_16px_30px_rgba(236,99,113,.25)] transition hover:scale-105"
    >
      View Classes
    </a>

    <a
      href="#"
      className="inline-flex min-w-[170px] items-center justify-center rounded-full bg-[#4EA8C2] px-[30px] py-[18px] text-[15px] font-extrabold text-white no-underline shadow-[0_16px_30px_rgba(78,168,194,.25)] transition hover:scale-105"
    >
      Book a Trial
    </a>
  </div>
</div>

<div className="relative z-10 mx-auto grid min-h-[650px] max-w-[1300px] grid-cols-1 items-center gap-4 px-6 md:grid-cols-[.9fr_1.1fr]">
  <img
    src="/assets/hero/group.png"
    alt="Gym Stars athletes"
    className="h-[175%] w-auto max-w-none object-contain"
  />
</div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white px-[6vw] py-20 text-center">
        <div className="mx-auto max-w-[900px]">
          <h2 className="mb-5 text-[clamp(32px,4vw,48px)] font-black text-[#003B80]">
            More Than Just a Gym
          </h2>

          <p className="mb-[18px] text-lg font-medium leading-[1.6] text-[#17345f]">
            Gym Stars Gymnastics is a fun, high-energy training center in Boise,
            Idaho focused on building confident, strong, and happy kids. From
            toddlers taking their first steps to competitive athletes chasing
            big goals, we create a positive environment where every child can grow.
          </p>

          <p className="mb-[18px] text-lg font-medium leading-[1.6] text-[#17345f]">
            Our programs combine skill development, fitness, and life skills like
            confidence, discipline, and teamwork — all while making sure kids are
            having fun every step of the way.
          </p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-white px-[6vw] py-[90px] text-center">
        <div className="mb-[50px]">
          <div className="mb-2 text-2xl text-[#4EA8C2]">✦</div>

          <h2 className="text-[clamp(32px,4vw,46px)] font-black uppercase tracking-[-1px] text-[#003B80]">
            Programs for Every Kid
          </h2>

          <div className="mx-auto mt-2 h-1 w-28 rounded-full bg-[#EC6371]" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className={`group overflow-hidden rounded-2xl bg-gradient-to-b ${program.color} shadow-[0_18px_45px_rgba(0,59,128,.12)] transition duration-300 hover:-translate-y-2`}
            >
              <div className="relative h-[185px] overflow-hidden">
                <img
                  src={program.img}
                  alt={program.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${program.color} opacity-35`} />
              </div>

              <div className="relative -mt-8 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-lg">
                  <span className="bg-gradient-to-br from-[#EC6371] via-[#FB8A4F] to-[#4EA8C2] bg-clip-text text-transparent">
                    {program.icon}
                  </span>
                </div>
              </div>

              <div className="px-5 pb-7 pt-4 text-center text-white">
                <h3 className="min-h-[48px] text-lg font-black uppercase leading-tight">
                  {program.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-white/85">
                  {program.age}
                </p>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-white/70 px-5 py-2.5 text-xs font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#003B80]"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRESCHOOL */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff6ec] via-white to-[#eef9fc] px-[6vw] py-[90px]">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-[#FCB442]/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[#EC6371]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[50px] rounded-[34px] bg-white p-[55px] shadow-[0_25px_70px_rgba(0,59,128,.12)] md:grid-cols-[1fr_.9fr]">
          <div>
            <div className="mb-[18px] inline-block rounded-full bg-[#fff0cc] px-[18px] py-2.5 text-sm font-black uppercase tracking-[.5px] text-[#b57a00]">
              Educational Preschool
            </div>

            <h2 className="m-0 mb-6 text-[clamp(36px,5vw,58px)] font-black uppercase leading-[.95] tracking-[-1.5px] text-[#003B80]">
              Learn, Play,
              <br />
              <span className="bg-gradient-to-r from-[#EC6371] via-[#FB8A4F] to-[#4EA8C2] bg-clip-text text-transparent">
                Move Every Day.
              </span>
            </h2>

            <p className="mb-[30px] max-w-[620px] text-lg font-semibold leading-[1.6] text-[#17345f]">
              Our preschool program blends early learning, creative play,
              sensory activities, and movement-based fun to help children build
              confidence, coordination, and social skills.
            </p>

            <div className="mb-[34px] flex flex-wrap gap-3">
              {[
                ["Hands-on learning", "bg-[#ffe3e7] text-[#b93e5c]"],
                ["Creative play", "bg-[#dff4f8] text-[#247b92]"],
                ["Movement based", "bg-[#fff0cc] text-[#b57a00]"],
                ["Social skills", "bg-[#e6eef7] text-[#003B80]"],
              ].map(([feature, color]) => (
                <span
                  key={feature}
                  className={`rounded-full px-4 py-[11px] text-sm font-extrabold ${color}`}
                >
                  {feature}
                </span>
              ))}
            </div>

            <a
              href="#"
              className="inline-block rounded-[13px] bg-[#EC6371] px-[30px] py-[17px] font-black text-white no-underline shadow-[0_15px_30px_rgba(236,99,113,.25)]"
            >
              Learn About Preschool
            </a>
          </div>

          <div className="relative flex min-h-[520px] items-end justify-center">
            <div className="absolute right-[10%] top-[10%] z-0 h-[420px] w-[420px] rounded-full bg-[#4EA8C2]/20" />
            <div className="absolute bottom-0 right-0 z-0 h-[260px] w-[260px] rounded-full bg-[#FCB442]/25" />

            <img
              src="https://images.squarespace-cdn.com/content/v1/5ae2f1b925bf02d15e59d264/38f936a1-3f08-4b18-a5f1-8e5a79ef73aa/slime.png?format=750w"
              alt="Educational preschool sensory activity"
              className="relative z-10 max-h-[540px] w-[115%] object-contain"
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-gradient-to-br from-[#003B80] via-[#004380] to-[#4EA8C2] px-[6vw] py-[70px] text-white">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[35px] md:grid-cols-[.9fr_1.1fr]">
          <div>
            <div className="mb-3.5 text-sm font-black uppercase tracking-[1px] text-[#FCB442]">
              Parent Reviews
            </div>

            <h2 className="m-0 mb-5 text-[clamp(30px,4vw,48px)] font-black uppercase leading-[.95]">
              Families Love Gym Stars
            </h2>

            <div className="rounded-[22px] bg-white p-7 text-[#0f2346] shadow-[0_25px_60px_rgba(0,0,0,.2)]">
              <div className="mb-3 text-xl text-[#FB8A4F]">★★★★★</div>

              <p className="m-0 mb-6 text-[17px] font-semibold leading-[1.5]">
                “Gym Stars is such a great place! The coaches take time to show
                the kids the right way to do things and they are very patient
                and kind. My daughter has loved every minute of it!”
              </p>

              <div className="font-black text-[#4EA8C2]">Gym Stars Parent</div>
            </div>
          </div>

          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/5ae2f1b925bf02d15e59d264/1678388643580-GXLSISAEN4M5OQ2S0028/IMG-0953.jpg?format=500w"
              alt="Kids enjoying gymnastics class at Gym Stars"
              className="max-h-[420px] w-full rounded-[30px] object-cover shadow-[0_25px_60px_rgba(0,0,0,.2)]"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-[#F7FAFC] px-[6vw] py-[90px]">
        <div className="mx-auto grid max-w-[1150px] grid-cols-1 items-stretch gap-[45px] md:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-[28px] bg-white p-[45px] shadow-[0_20px_50px_rgba(0,59,128,.10)]">
            <h2 className="m-0 mb-5 text-[42px] font-black text-[#003B80]">
              Come Visit Us
            </h2>

            <p className="text-[17px] leading-[1.6] text-[#17345f]">
              Ready to find the right class for your child? Visit Gym Stars
              Gymnastics in Boise or contact us to schedule a trial class.
            </p>

            <div className="mt-7">
              <div className="mb-[18px] font-extrabold text-[#003B80]">
                Location
                <span className="mt-1 block font-semibold text-[#52657f]">
                  PUT YOUR ADDRESS HERE
                </span>
              </div>

              <div className="mb-[18px] font-extrabold text-[#003B80]">
                Email
                <span className="mt-1 block font-semibold text-[#52657f]">
                  gymstarsidaho@gmail.com
                </span>
              </div>

              <div className="mb-[18px] font-extrabold text-[#003B80]">
                Phone
                <span className="mt-1 block font-semibold text-[#52657f]">
                  PUT PHONE NUMBER HERE
                </span>
              </div>
            </div>
          </div>

          <div className="min-h-[420px] overflow-hidden rounded-[28px] bg-[#E6EEF2] shadow-[0_20px_50px_rgba(0,59,128,.10)]">
            <iframe
              src="PUT-GOOGLE-MAP-EMBED-LINK-HERE"
              loading="lazy"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-[#003B80] via-[#004c9a] to-[#4EA8C2] px-[6vw] py-[45px] text-white">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-[30px]">
          <div>
            <h3 className="m-0 mb-2 text-2xl font-bold">
              Gym Stars Gymnastics
            </h3>
            <p className="text-sm text-[#d7e6ff]">
              Building confident kids through movement, strength, and fun.
            </p>
          </div>

          <div className="flex flex-wrap gap-[22px]">
            {["Programs", "Classes", "Team", "Contact"].map((link) => (
              <a key={link} href="#" className="text-sm text-[#d7e6ff] no-underline">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  )
}