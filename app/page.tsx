"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const fullName = "Yeonhwa Lee";
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/80 backdrop-blur border-b border-[#1e293b] z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <span className="text-sm font-semibold text-[#93c5fd]">
            YEONHWA LEE
          </span>

          <div className="flex items-center gap-2 text-[13px] text-[#cbd5f5]">
            {["home", "about", "skills", "projects"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="px-2 py-1 rounded-md hover:bg-[#1e293b] hover:text-white transition font-medium"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}

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
        {/* Hero */}
        <section id="home" className="relative h-[85vh] min-h-[520px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/web_title.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#020617]/90 via-[#020617]/70 to-[#020617]/40" />

          {/* Hero Text */}
          <div className="relative z-10 max-w-5xl mx-auto h-full px-6 flex items-center justify-end">
            <div className="max-w-md text-right">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-3 drop-shadow-lg text-right">
                <span className="block text-[#e5e7eb]">Hi, I’m</span>
                <span className="block text-[#93c5fd]">
                  {typedName}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>

              <p className="text-sm md:text-base text-[#cbd5f5] mb-6">
                Computer Vision · AI · Robotics Developer
              </p>
              <div className="flex justify-end gap-3">
                <a
                  href="#projects"
                  className="px-4 py-2 rounded-md bg-[#2563eb] text-white text-sm font-medium hover:bg-[#1d4ed8] transition"
                >
                  Projects
                </a>

                <a
                  href="https://github.com/Yhbelle28"
                  target="_blank"
                  className="px-4 py-2 rounded-md border border-[#334155] text-[#e5e7eb] text-sm hover:bg-white/10 transition"
                >
                  GitHub
                </a>

                <a
                  href="mailto:yhbelle28@gmail.com"
                  className="px-4 py-2 rounded-md border border-[#334155] text-[#e5e7eb] text-sm hover:bg-white/10 transition"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* About + Skills 오버레이 */}
          <div className="absolute bottom-10 md:bottom-16 left-0 w-full flex justify-start">
            <div className="max-w-5xl mx-auto px-4 flex justify-start w-full">
              <div className="bg-white/20 backdrop-blur-md p-8 md:p-12 max-w-xl xl shadow-xl flex flex-col gap-6">
                {/* About */}
                <div>
                  <h2 className="text-2xl font-semibold mb-2 text-[#93c5fd]">About</h2>
                  <p className="text-sm md:text-base text-[#e5e7eb] leading-relaxed">
                    컴퓨터 비전, 딥러닝, 로봇 제어를 중심으로 실제 환경에서
                    동작하는 AI 시스템 구현에 관심이 많습니다.
                  </p>
                </div>

                {/* Skills */}
                <div id="skills">
                  <h2 className="text-2xl font-semibold mb-2 text-[#93c5fd]">Skills</h2>
                  <div className="flex flex-wrap gap-x-3 gap-y-2">
                    {["Python", "PyTorch", "OpenCV", "YOLO", "Lerobot"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="text-xs md:text-sm text-[#e5e7eb] font-small hover:text-[#2563eb] transition"
                        >
                          #{skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="px-4 py-20 border-t border-[#cbd5f5] relative"
          style={{ backgroundColor: "#f8fafc" }}
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
            {[
              {
                title: "공장 제품 불량 검사",
                desc: "실시간 불량 판정 시스템. CNN과 YOLO 모델로 제품 결함 감지, PLC 연동.",
                tags: ["CNN", "YOLO", "PLC", "Python"],
                link: "projects/pj_fusebox",
              },
              {
                title: "smolVLA + Pi0 로봇 구동",
                desc: "smolVLA와 Pi0로 Dobot Magician 로봇 구동. 데이터 수집, 학습, 동작 테스트.",
                tags: ["smolVLA", "Pi0", "Dobot", "Python", "Robotics"],
                link: "projects/pj_dobot",
              },
              {
                title: "여행자 스케줄 플래너 앱",
                desc: "LLM과 연동해 맞춤형 일정, 관광지 추천, 여행 팁 제공 앱 개발. Next.js + OpenAI API 사용.",
                tags: ["Next.js", "LLM", "OpenAI", "Travel App", "Web"],
                link: "projects/pj_travel",
              },
            ].map((proj, idx) => (
              <Link key={idx} href={proj.link} className="flex-1 relative flex flex-col justify-start bg-white min-h-[400px] p-6 md:p-8">
                {/* 상단 굵은 라인 (About 색) */}
                <div className="w-full h-1 bg-[#93c5fd] mb-4"></div>

                {/* 프로젝트 제목 */}
                <h3 className="text-xl font-bold text-[#1e293b] mb-3">{proj.title}</h3>

                {/* 설명 */}
                <p className="text-sm md:text-base text-[#334155] mb-auto">{proj.desc}</p>

                {/* 스킬 바로 위 메모장 줄 */}
                <div className="w-full border-b border-[#cbd5f5] mt-auto"></div>

                {/* 스킬 태그 */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-gray-500 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

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
