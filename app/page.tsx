"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Press_Start_2P, Playfair_Display } from "next/font/google";

// 폰트 설정
const pixelFont = Press_Start_2P({ weight: "400", subsets: ["latin"] });
const motionFont = Playfair_Display({ weight: "700", style: "italic", subsets: ["latin"] });

export default function Home() {
  const fullName = "Yeonhwa Lee";
  const [typedName, setTypedName] = useState("");

  // 타이핑 효과
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
            {["home", "about", "projects"].map((id) => (
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

      <main className="min-h-screen bg-[#020617] text-[#e5e7eb]">
        
        {/* 1. HERO SECTION */}
        <section id="home" className="relative h-screen w-full overflow-hidden group bg-black">
          
          {/* (1) 배경 이미지 레이어 */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out 
                       filter grayscale blur-[2px] scale-100 opacity-60
                       group-hover:grayscale-0 group-hover:blur-0 group-hover:scale-105 group-hover:opacity-100"
            style={{ backgroundImage: "url('/web_title.jpg')" }} 
          />
          
          {/* (2) 어두운 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />

          {/* (3) 증명사진 + 디텍팅 박스 */}
          <div className="absolute top-[12%] md:top-[30%] left-[70%] -translate-x-1/2 md:translate-x-0 md:left-[60%] w-[160px] h-[200px] md:w-[280px] md:h-[350px] 
                          opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100 pointer-events-none
                          relative z-10">
            
            {/* 증명사진 (투명도 조절됨: opacity-70) */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 rounded-sm opacity-40" 
              style={{ backgroundImage: "url('/profile.jpg')" }} 
            />

            {/* 초록색 테두리 및 라벨 */}
            <div className="absolute inset-0 border-2 border-[#00ff41] z-10">
                {/* 라벨 수정됨: 
                    1. text-[10px] (모바일) -> md:text-xs (PC)
                    2. -top-5 (모바일) -> md:-top-6 (PC) : 글씨가 작아지니 박스랑 더 붙임
                    3. px-1 py-0.5 (모바일) -> md:px-2 md:py-1 (PC) : 여백도 줄임
                */}
                <div className="absolute -top-5 md:-top-6 left-[-2px] bg-[#00ff41] text-black text-[10px] md:text-xs font-bold px-1 py-0.5 md:px-2 md:py-1">
                  PERSON: ENGINEER 99%
                </div>
                
                {/* 모서리 장식도 모바일엔 조금 작게 (w-1.5) */}
                <div className="absolute top-0 left-0 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#00ff41]"></div>
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#00ff41]"></div>
              </div>
          </div>
          {/* (4) 텍스트 콘텐츠 (위치 상향 조정됨) */}
          {/* -mt-16 md:-mt-24 클래스를 추가하여 전체 블록을 위로 올림 */}
          <div className="relative z-20 h-full max-w-5xl mx-auto px-6 flex flex-col justify-center -mt-22 md:-mt-75">
            <div className="max-w-2xl">
              
              {/* Main Title */}
              <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-4 leading-[1.2]">
                From{" "}
                <span className={`${pixelFont.className} text-3xl md:text-6xl text-[#4ade80] relative top-1 md:top-2`}>
                  PIXEL
                </span>
                <br />
                to{" "}
                <span className={`${motionFont.className} text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] italic tracking-normal`}>
                  Motion.
                </span>
              </h1>
              
              {/* Sub Copy */}
              <p className="text-lg md:text-2xl text-[#cbd5f5] font-light mb-8">
                Teaching Machines to <span className="text-white font-medium border-b border-[#00ff41]/50">See the World.</span>
              </p>
              
              {/* ▼▼▼ 수정된 부분: Description & Typed Name ▼▼▼ */}
              <p className="text-sm md:text-base text-gray-400 max-w-lg leading-relaxed mb-10 border-l-2 border-[#334155] pl-4">
                시각 데이터(Vision)를 분석하여 로봇을 제어(Action)하는 엔지니어,<br/>
                
                {/* 강조할 부분을 span으로 감싸고 네온 그린 색상 적용 */}
                <span className="text-[#4ade80] font-semibold">
                  {typedName}
                  <span className="animate-pulse ml-0.5">|</span> {/* 커서에도 색상 적용됨, 약간의 간격 추가 */}
                </span> 
                
                <span className="text-gray-400"> 입니다.</span> {/* '입니다'는 다시 회색으로 */}
              </p>
              {/* ▲▲▲ 수정된 부분 끝 ▲▲▲ */}
            </div>
          </div>

          {/* Scroll Down Indicator (독립적으로 하단 고정) */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center animate-bounce text-[#cbd5e1] z-30">
            <span className="text-xs tracking-widest uppercase">Scroll to Explore</span>
            <div className="w-[1px] h-8 bg-[#cbd5e1] mx-auto mt-2"></div>
          </div>

        </section>


        {/* 2. BRIDGE SECTION: About & Skills */}
        <section id="about" className="py-20 md:py-28 bg-[#0f172a] border-b border-[#1e293b]">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            
            {/* About Text */}
            <div>
              <h2 className="text-xs font-bold text-[#60a5fa] tracking-widest uppercase mb-4">About Me</h2>
              <h3 className="text-3xl font-bold text-white mb-6">
                Code that Moves Reality.
              </h3>
              <p className="text-[#94a3b8] leading-loose mb-6">
                저는 <strong>Deep Learning</strong>과 <strong>Robot Control</strong>의 접점에서 일합니다. 
                단순히 모델을 학습시키는 것을 넘어, 실제 하드웨어(Pi-0, Dobot)가 물리 세계와 상호작용하도록 만드는 것에 열정을 느낍니다.
              </p>
              <p className="text-[#94a3b8] leading-loose">
                실시간 객체 탐지(YOLO)로 산업 현장의 안전을 지키고, LLM을 통해 로봇과 자연스럽게 대화하는 미래를 구현하고 있습니다.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="bg-[#1e293b]/50 p-8 rounded-2xl border border-[#334155]">
              <h2 className="text-xs font-bold text-[#60a5fa] tracking-widest uppercase mb-6">Tech Stack</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm text-white font-semibold mb-3">Core & AI</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "PyTorch", "OpenCV", "YOLOv5/8", "LeRobot"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-[#0f172a] border border-[#334155] rounded-full text-xs text-[#cbd5f5]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm text-white font-semibold mb-3">Hardware & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Dobot Magician", "Raspberry Pi", "PLC", "Docker", "Git"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-[#0f172a] border border-[#334155] rounded-full text-xs text-[#cbd5f5]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* 3. PROJECTS SECTION */}
        <section id="projects" className="px-4 py-24 bg-[#f8fafc] text-[#0f172a]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-[#0f172a] text-center md:text-left">
              Selected Projects
            </h2>

            <div className="flex flex-col md:flex-row gap-6">
              {[
                {
                  title: "개인 맞춤형\nAI 여행 비서",
                  desc: "사용자의 위치(GPS)와 일정을 실시간으로 분석하여 묻기 전에 필요한 현지 문화 및 안전 정보를 제공하는 선제적(Proactive) 가이드 서비스.",
                  tags: ["n8n", "Prompt Engineering", "Prototyping"],
                  date: "2025.11-2025.11",
                  link: "projects/pj_travel",
                },
                {
                  title: "AI Vision 기반\n공정 자동화 시스템",
                  desc: "YOLOv5s 모델을 활용한 고속 비전 검사와 PLC 및 협동로봇 제어를 결합한 공정 자동화 시스템. 실시간 불량 검출부터 자동 배출(Sorting)까지 구현.",
                  tags: ["YOLOv5", "PLC", "Robot", "Python"],
                  date: "2025.11-2025.12",
                  link: "projects/pj_fusebox",
                },
                {
                  title: "Pi0 기반\n비대면 로봇 배달",
                  desc: "음성 인식 기반 로봇 자동 배달 솔루션. 환자의 자연어 명령을 LLM으로 분석하고, 비전 모델(Pi-0)을 통해 로봇 팔이 물품을 직접 파지하여 전달.",
                  tags: ["LeRobot", "PyTorch", "Gemma3", "FastAPI"],
                  date: "2026.01-2026.02",
                  link: "projects/pj_dobot",
                },
              ].map((proj, idx) => (
                <Link key={idx} href={proj.link} className="flex-1 group relative flex flex-col justify-start bg-white border border-slate-200 min-h-[400px] p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 rounded-xl">
                  <span className="text-5xl font-black text-slate-100 absolute top-4 right-6 -z-0 group-hover:text-[#eff6ff] transition-colors">
                    0{idx + 1}
                  </span>
                  <div className="z-10 relative h-full flex flex-col">
                    <h3 className="text-xl font-bold text-[#1e293b] mb-4 whitespace-pre-line leading-tight group-hover:text-[#2563eb] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-[#475569] mb-8 leading-relaxed line-clamp-4">
                      {proj.desc}
                    </p>
                    <div className="mt-auto pt-4 border-t border-slate-100">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {proj.tags.map((tag) => (
                          <span key={tag} className="text-[11px] font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-slate-400 font-mono">{proj.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center border-t border-slate-200 bg-white space-y-2">
          <p className="text-xs text-slate-500">
            Email: yhbelle28@gmail.com | Github: @Yhbelle28
          </p>
          <p className="text-[10px] text-slate-400">
            © 2026 Yeonhwa Lee · Portfolio
          </p>
        </footer>
      </main>
    </>
  );
}