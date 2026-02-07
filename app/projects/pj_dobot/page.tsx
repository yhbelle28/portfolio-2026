"use client";

import Link from "next/link";

export default function PjDobot() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/80 backdrop-blur border-b border-[#1e293b] z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <span className="text-sm font-semibold text-[#93c5fd]">
            YEONHWA LEE
          </span>

          <div className="flex items-center gap-2 text-[13px] text-[#cbd5f5]">
  <a
    href="/#home"
    className="px-2 py-1 rounded-md hover:bg-[#1e293b] hover:text-white transition font-medium"
  >
    Home
  </a>
  <a
    href="/#about"
    className="px-2 py-1 rounded-md hover:bg-[#1e293b] hover:text-white transition font-medium"
  >
    About
  </a>
  <a
    href="/#skills"
    className="px-2 py-1 rounded-md hover:bg-[#1e293b] hover:text-white transition font-medium"
  >
    Skills
  </a>
  <a
    href="/#projects"
    className="px-2 py-1 rounded-md hover:bg-[#1e293b] hover:text-white transition font-medium"
  >
    Projects
  </a>

  <a
    href="https://github.com/Yhbelle28"
    target="_blank"
    className="ml-2 px-2 py-1 rounded-md hover:bg-[#1e293b] hover:text-white transition font-medium"
  >
    GitHub
  </a>
</div>

        </div>
      </nav>

      <main className="min-h-screen bg-[#020617] text-[#e5e7eb] pt-16">
        {/* Hero / Project Header */}
        <section className="relative h-[40vh] min-h-[300px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/web_title.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#020617]/90 via-[#020617]/70 to-[#020617]/40" />

          <div className="relative z-10 max-w-5xl mx-auto h-full px-6 flex items-center justify-end">
            <div className="max-w-md text-right">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-3 drop-shadow-lg text-right">
                <span className="block text-[#e5e7eb]">Project</span>
                <span className="block text-[#93c5fd]">
                  smolVLA + Pi0 로봇 구동
                </span>
              </h1>
              <p className="text-sm md:text-base text-[#cbd5f5]">
                smolVLA와 Pi0를 사용해 Dobot Magician 로봇을 제어하고
                실제 환경에서 AI 기반 로봇 동작 테스트를 수행한 프로젝트입니다.
              </p>
            </div>
          </div>
        </section>

        {/* Project Content */}
        <section className="max-w-5xl mx-auto px-4 py-16 flex flex-col gap-8">
          {/* About / Description */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#93c5fd] mb-4">About</h2>
            <p className="text-[#e5e7eb] text-base leading-relaxed">
              이 프로젝트에서는 smolVLA와 Pi0를 활용하여 Dobot Magician
              로봇을 구동했습니다. 데이터 수집, 학습, 동작 테스트 과정을
              포함하며, 실제 환경에서 로봇의 정밀한 동작과 AI 기반
              의사결정 능력을 검증했습니다.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#93c5fd] mb-4">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {["smolVLA", "Pi0", "Dobot", "Python", "Robotics"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="text-sm text-[#e5e7eb] font-medium hover:text-[#2563eb] transition"
                  >
                    #{skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Optional: Link Back */}
          <div className="flex justify-start">
            <Link
              href="/"
              className="px-4 py-2 rounded-md bg-[#2563eb] text-white text-sm font-medium hover:bg-[#1d4ed8] transition"
            >
              Back to Home
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center text-xs text-[#94a3b8] border-t border-[#1e293b] space-y-2">
          <p className="text-[11px] text-[#64748b]">
            Email: yhbelle28@gmail.com | 010-6701-7856
          </p>
          <p className="text-[11px] text-[#64748b]">
            © 2026 Yeonhwa Lee · Portfolio
          </p>
        </footer>
      </main>
    </>
  );
}
