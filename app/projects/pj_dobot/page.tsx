"use client";

import Link from "next/link";
import Image from "next/image";

export default function PjBarrierFree() {
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
        
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/web_title.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#020617]/90 via-[#020617]/70 to-[#020617]/40" />

          <div className="relative z-10 max-w-5xl mx-auto h-full px-6 flex items-center justify-end">
            <div className="max-w-2xl text-right">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-3 drop-shadow-lg">
                <span className="block text-[#e5e7eb]">Barrier-Free Project</span>
                <span className="block text-[#93c5fd]">
                  Pi0 기반<br />비대면 로봇 배달 시스템
                </span>
              </h1>
              <p className="text-sm md:text-base text-[#cbd5f5] mt-4">
                음성 인식(STT)과 LLM의 의도 분석을 로봇 제어 모델(Pi-0)과 연동하여,<br className="hidden md:block"/>
                격리 병동 내 비접촉 물품 전달을 수행하는 End-to-End AI 시스템입니다.
              </p>
            </div>
          </div>
        </section>

        {/* Project Content Layout */}
        <section className="px-4 py-16 bg-[#f8fafc] text-[#1e293b]">
          <div className="max-w-6xl mx-auto">
            
            {/* 상단 굵은 라인 */}
            <div className="w-full h-1 bg-[#93c5fd] mb-12"></div>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
              
              {/* [Left Column] Image Area */}
              <div className="w-full lg:w-[550px] sticky shrink-0 lg lg:top-24">
                 <div className="w-full bg-white -xl shadow-lg border border-gray-100 p-2">
                    <Image
                       src="/pj_dobot_img2.png"
                       alt="Barrier-Free System Architecture"
                       width={800} 
                       height={2500}
                       className="w-full h-auto lg"
                       priority
                    />
                 </div>
                 <p className="text-center text-xs text-gray-400 mt-3">▲ AI 로봇 제어 전체 파이프라인 구조도</p>
              </div>

              {/* [Right Column] Text Content Area */}
              <div className="flex-1 flex flex-col gap-10">
                 
                 {/* Header Info */}
                 <div>
                    <h2 className="text-3xl font-bold mb-2 leading-tight">Untact Arm: 고위험 병동 로봇 솔루션</h2>
                    <p className="text-[#64748b] font-medium mb-6">
                       Role: Robot Learning Engineer & System Pipeline Architect
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                       <div>
                          <h3 className="font-semibold text-[#2563eb] mb-2 text-sm flex items-center gap-2">🛠️ Tech Stack</h3>
                          <p className="text-sm text-[#334155] leading-relaxed">
                            Python, LeRobot, PyTorch, Gemma 3 (LLM), FastAPI, Ubuntu
                          </p>
                       </div>
                       <div>
                          <h3 className="font-semibold text-[#2563eb] mb-2 text-sm flex items-center gap-2">🤖 AI Model & Hardware</h3>
                          <p className="text-sm text-[#334155] leading-relaxed">
                            Pi-0 (Vision-Language-Action Model), Dobot Magician, Intel Inference Server
                          </p>
                       </div>
                    </div>
                 </div>

                 {/* 1. Project Overview */}
                 <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold border-l-4 border-[#2563eb] pl-3">1. Project Overview</h3>
                    <p className="text-[#334155] leading-relaxed bg-white/50 p-4 rounded-lg border border-gray-100">
                       코로나19와 같은 고위험 격리 병동에서 의료진의 방호복 착용 시간을 절감하고 감염 위험을 최소화하기 위해 개발되었습니다. 환자의 음성 명령("물 줘")을 LLM이 분석하고, 이를 Vision-Language-Action 모델(Pi-0)이 탑재된 로봇 팔이 수행하는 완전 자동화 시스템을 구축했습니다.
                    </p>
                 </div>

                 {/* 2. Key Contributions */}
                 <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold border-l-4 border-[#2563eb] pl-3">2. Key Contributions</h3>
                  
                  <div className="space-y-4">
                    {/* Robot Learning Part */}
                    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm transition hover:shadow-md">
                      <h4 className="font-bold text-[#1e293b] text-lg mb-3 flex items-center gap-2">
                        로봇 행동 모델 학습 (Robot Learning)
                      </h4>
                      <ul className="list-disc list-inside text-[#334155] text-sm space-y-2 ml-2">
                        <li><span className="font-semibold text-[#1e293b]">데이터셋 구축:</span> Leader-Follower Arm 구성을 활용하여 직접 로봇을 움직이며 학습용 행동 데이터(Trajectory, Gripper Action) 수집.</li>
                        <li><span className="font-semibold text-[#1e293b]">모델 학습 및 최적화:</span> LeRobot 라이브러리를 활용하여 <strong>Pi-0 (Pi-Zero)</strong> 모델 학습. 초기 <em>SmolVLA</em> 모델의 성능 한계를 극복하기 위해 대형 모델로 전환 및 서버 추론 환경 구축.</li>
                        <li><span className="font-semibold text-[#1e293b]">Delta 좌표 제어:</span> 비전 피드백을 통해 목표물의 상대 좌표(Delta)를 실시간 추론하여 정밀한 파지(Gripping) 동작 구현.</li>
                      </ul>
                    </div>

                    {/* Pipeline Part */}
                    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm transition hover:shadow-md">
                      <h4 className="font-bold text-[#1e293b] text-lg mb-3 flex items-center gap-2">
                        LLM-Robot 제어 파이프라인 구축
                      </h4>
                      <ul className="list-disc list-inside text-[#334155] text-sm space-y-2 ml-2">
                        <li><span className="font-semibold text-[#1e293b]">End-to-End 시스템 설계:</span> [음성 입력 → STT → LLM 의도 분석 → 로봇 모델 추론 → 하드웨어 제어]로 이어지는 전체 데이터 파이프라인 연결.</li>
                        <li><span className="font-semibold text-[#1e293b]">비동기 통신 처리:</span> FastAPI 서버와 로컬 로봇 제어부 간의 작업 대기열(Task Queue) 및 Polling 구조를 설계하여 명령 누락 방지.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 3. System Workflow */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold border-l-4 border-[#2563eb] pl-3">3. System Workflow</h3>
                  <div className="bg-slate-100 p-6 rounded-xl text-sm text-[#334155] border border-slate-200">
                    <ol className="relative border-l border-gray-300 ml-3 space-y-6">
                      <li className="ml-6">
                        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-4 ring-white font-bold text-xs text-blue-600">1</span>
                        <h4 className="font-bold text-[#2563eb]">음성 명령 입력</h4>
                        <p className="text-xs text-gray-500 mt-1">환자: "목말라" (React Web/App → STT 변환)</p>
                      </li>
                      <li className="ml-6">
                        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-4 ring-white font-bold text-xs text-blue-600">2</span>
                        <h4 className="font-bold text-[#2563eb]">AI 의도 분석 (LLM)</h4>
                        <p className="text-xs text-gray-500 mt-1">Gemma 3 모델이 의도 파악 → JSON 생성 {"{action: 'water', bed: 1}"}</p>
                      </li>
                      <li className="ml-6">
                        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-4 ring-white font-bold text-xs text-blue-600">3</span>
                        <h4 className="font-bold text-[#2563eb]">작업 수신 및 모델 추론 (담당)</h4>
                        <p className="text-xs text-gray-500 mt-1">로봇 제어부에서 작업 수신 → Pi-0 모델이 카메라 영상 분석 후 이동 좌표 추론</p>
                      </li>
                      <li className="ml-6">
                        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-4 ring-white font-bold text-xs text-blue-600">4</span>
                        <h4 className="font-bold text-[#2563eb]">행동 개시</h4>
                        <p className="text-xs text-gray-500 mt-1">추론된 (x, y, z, r, grip) 값을 Dobot에 실시간 전송하여 물품 배달 수행</p>
                      </li>
                    </ol>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-bold text-[#1e293b] mb-3 flex items-center gap-2 text-base">
                        실제 로봇 구동 시연 영상
                    </h4>
                    <div className="w-full bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                        <Image
                            src="/pj_dobot_gif1.gif"  // 로직 이미지 경로
                            alt="Robot Inference Logic"
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                  </div>
                </div>

                {/* 4. Results & Troubleshooting */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold border-l-4 border-[#2563eb] pl-3">4. Key Results & Troubleshooting</h3>
                  
                  <div className="space-y-5">
                    {/* Key Results */}
                    <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
                        <span className="font-bold text-blue-800 block mb-2 text-lg">🏆 핵심 성과</span>
                        <ul className="list-disc list-inside text-sm text-[#334155] space-y-2">
                          <li><span className="font-semibold">자연어 기반 제어 성공:</span> 정해진 명령어가 아닌 자연스러운 대화("아파", "물 좀")를 통해 로봇을 제어하는 파이프라인 완성.</li>
                          <li><span className="font-semibold">고난도 조작 수행:</span> Pi-0 모델 학습을 통해 물병 파지(Gripping) 및 전달 동작의 궤적 생성 성공.</li>
                          <li><span className="font-semibold">모델 경량화와 성능의 타협:</span> 소형 로봇(Dobot)에 맞는 모델 튜닝 및 서버 기반 추론 시스템 최적화.</li>
                        </ul>
                    </div>

                    {/* Troubleshooting Case Study */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-[#1e293b] mb-4 flex items-center gap-2 text-lg">
                        🛠️ 모델 학습 중 발생한 좌표 오차 해결 (Troubleshooting)
                      </h4>
                      <div className="space-y-4">
                        <div className="pl-4 border-l-2 border-red-300">
                           <span className="text-red-500 font-bold block mb-1 text-xs uppercase tracking-wider">Problem</span>
                           <p className="text-sm text-[#334155]">
                             대형 로봇용으로 설계된 Pi-0 모델을 소형 Dobot에 적용하자, 추론된 Z축(높이) 좌표가 로봇의 물리적 한계치를 벗어나거나 <strong>Over-limit 오류</strong>가 지속적으로 발생함.
                           </p>
                        </div>
                        <div className="pl-4 border-l-2 border-yellow-300">
                           <span className="text-yellow-600 font-bold block mb-1 text-xs uppercase tracking-wider">Analysis</span>
                           <p className="text-sm text-[#334155]">
                             모델이 학습된 기하학적 구조(Geometry)가 Dobot과 달라 발생하는 문제로 판단. 단순히 데이터만 학습시키는 것으로는 해결되지 않음을 확인.
                           </p>
                        </div>
                        <div className="pl-4 border-l-2 border-blue-300 bg-blue-50/30 py-2 rounded-r-lg">
                           <span className="text-blue-600 font-bold block mb-1 text-xs uppercase tracking-wider">Solution</span>
                           <p className="text-sm text-[#334155]">
                             1. 학습 설정 중 기하학 계산 관련 파라미터의 <strong>Freezing 옵션을 False</strong>로 변경하여 모델이 새로운 로봇의 구조에 맞춰 재조정되도록 유도.<br/>
                             2. Z축 좌표에 대한 안전 범위(Clamping) 로직을 후처리 단계에 추가하여 하드웨어 손상 방지. <br/>
                             <strong>→ 결과:</strong> 좌표 오차 해결 및 안정적인 파지 동작 구현 성공.
                           </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 하단 구분선 & Skills */}
                <div className="mt-4 pt-8 border-t border-[#cbd5f5]">
                   <div className="flex flex-wrap gap-3">
                     {["Python", "LeRobot", "Pi-0 Model", "Gemma 3", "FastAPI", "Robot Control", "Computer Vision", "React"].map((skill) => (
                       <span key={skill} className="px-3 py-1 rounded-full bg-white border border-gray-200 text-sm text-[#64748b] font-medium hover:text-[#2563eb] hover:border-[#2563eb] transition">
                         #{skill}
                       </span>
                     ))}
                   </div>
                   
                   <div className="mt-8 flex justify-end">
                     <Link href="/#projects" className="px-6 py-2 rounded-sm bg-[#2563eb] text-white text-sm font-medium hover:bg-[#1d4ed8] transition shadow-md">
                       Back to Home
                     </Link>
                   </div>
                </div>

              </div> {/* End of Right Column */}
            </div>
            
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center text-xs text-[#94a3b8] border-t border-[#1e293b] space-y-2">
          <p className="text-[11px] text-[#64748b]">Email: yhbelle28@gmail.com | 010-6701-7856</p>
          <p className="text-[11px] text-[#64748b]">© 2026 Yeonhwa Lee · Portfolio</p>
        </footer>
      </main>
    </>
  );
}