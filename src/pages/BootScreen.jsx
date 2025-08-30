import { useEffect, useState } from "react";
import "./BootScreen.css";

const fakeLogs = [
  "theFolio v1.2.4 initializing...",
  "[ OK ] Mounted /dev/nvme0n1p2 on / with ext4 filesystem",
  "[ OK ] Loading kernel modules: nftables, overlayfs, kvm_intel, wireguard...",
  "[ INFO ] Detected 16 CPU cores @ 3.40GHz",
  "[ INFO ] Allocating 64,214 MB of system memory...",
  "",
  "[ OK ] Network stack initialized successfully",
  "[ WARN ] DNS resolution took too long (timeout=5000ms)",
  "[ OK ] Resolving host: github.com... 140.82.112.4",
  ">>> Injecting custom payload into memory space...",
  "[ INFO ] Key exchange complete. Session encrypted with AES-256-GCM.",
  "[ ERROR ] Packet loss detected. Retrying handshake...",
  "[ OK ] Handshake stabilized. Connection secured.",
  "",
  "[ OK ] Starting process: ./zaki_portfolio_engine --force --debug",
  "[ LOG ] Loading modules [ ui.jsx | animations.js | tailwind.config.js ]",
  "[ LOG ] Module 'tailwind.config.js' took 4221ms to compile ⚡",
  "[ HACK ] Bypassing API rate limits... success.",
  "[ LOG ] Injecting cinematic sequence at 0x004AF32...",
  "[ LOG ] Drinking GUAVA JUICE for maximum confidence...",
  "[ INFO ] Memory leak ignored (¯\\_(ツ)_/¯)",
  "",
  "[ OK ] SSH Tunnel established (localhost:2222 → 192.168.0.42:22)",
  "[ OK ] Fetching secret project files from /etc/portfolio/zaki...",
  "[ DATA ] Found 42 vulnerabilities... just kidding.",
  "[ DEBUG ] User ‘zaki’ authenticated with admin privileges.",
  "",
  "██████████████████████████████████████████████████████████████████████",
  "[ HAX ] Downloading cat memes archive (13GB)... ETA: never",
  "[ PRANK ] printf('hello world') → System crash (jk it’s fine)",
  "██████████████████████████████████████████████████████████████████████",
  "",
  "[ OK ] Portfolio Engine Boot Sequence Started",
  "[ LOADING ] Rendering UI components → <HomePage /> <Projects /> <Contact />",
  "[ INFO ] Attaching shaders for smooth animations...",
  "[ OK ] Deploying cinematic intro..."
];

// final log is separated so we can fade it in centered
const finalLog = "[ OK ] Ready. Welcome back, the1.";

export default function BootScreen({ onFinish }) {
  const [visibleLogs, setVisibleLogs] = useState([]);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    let index = 0;

    const addLog = () => {
      if (index >= fakeLogs.length) {
        // wait 1.5s, then show final log in center
        setTimeout(() => {
          setShowFinal(true);
          setTimeout(onFinish, 2000); // trigger after showing final log
        }, 1500);
        return;
      }

      setVisibleLogs((prev) => [...prev, fakeLogs[index]]);
      index++;

      const delay = Math.floor(Math.random() * 1000) + 150;
      setTimeout(addLog, delay);
    };

    addLog();
  }, [onFinish]);

  return (
    <div className="boot-screen">
      {/* logs scroll upward from bottom */}
      <div className="scrolling-logs">
        {visibleLogs.map((log, idx) => (
          <pre key={idx} className={`log-line ${getLogClass(log)}`}>
            {log}
          </pre>
        ))}
        {!showFinal && <span className="cursor" />}
      </div>

      {/* final centered log */}
      {showFinal && (
        <div className="final-log">
          <pre className="log-line ok">{finalLog}</pre>
          <span className="cursor" />
        </div>
      )}
    </div>
  );
}

function getLogClass(log) {
  if (log.includes("[ OK ]")) return "ok";
  if (log.includes("[ WARN ]")) return "warn";
  if (log.includes("[ ERROR ]")) return "error";
  if (log.includes("[ INFO ]")) return "info";
  if (log.includes("[ DEBUG ]")) return "debug";
  if (log.includes("[ HACK ]") || log.includes("[ HAX ]")) return "hack";
  return "";
}
