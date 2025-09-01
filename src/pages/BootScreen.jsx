import { useEffect, useState, useRef } from "react";
import "./BootScreen.css";

const fakeLogs = [
  "theFolio v2.0.7 initializing...",
  "[ OK ] Mounted /dev/nvme0n1p2 on / with ext4 filesystem (rw,noatime,data=ordered)",
  "[ OK ] Kernel modules loaded: nftables, overlayfs, kvm_intel, wireguard, zram, bpf",
  "[ INFO ] CPU topology: 16 cores / 32 threads @ 3.40GHz (Turbo Boost enabled)",
  "[ INFO ] Memory allocation: 64,214 MB physical, 8,192 MB swap, 2,048 MB zram",
  "[ INFO ] GPU detected: NVIDIA RTX 4080 (Driver v535.98)",
  "[ INFO ] Initializing Vulkan shaders for UI rendering...",
  "[ OK ] Network stack initialized (IPv4 + IPv6 dual stack)",
  "[ WARN ] DNS resolution latency: 5123ms (threshold: 5000ms)",
  "[ OK ] Host resolved: github.com → 140.82.112.4 via DNS-over-HTTPS",
  "[ INFO ] Establishing secure tunnel: TLSv1.3 → AES-256-GCM → ECDHE-X25519",
  "[ ERROR ] Packet loss detected on interface eth0 (7.2%) — retrying handshake...",
  "[ OK ] Handshake stabilized. Session encrypted. Fingerprint: SHA256:9f:2a:7b:...",
  "[ DEBUG ] Running pre-flight checks on ./zaki_portfolio_engine --force --debug",
  "[ LOG ] Loading modules: [ ui.jsx | animations.js | tailwind.config.js | theme-dark.css ]",
  "[ LOG ] Module 'tailwind.config.js' compiled in 4221ms ⚡ (no warnings)",
  "[ HACK ] Injecting payload into memory space at 0x004AF32... success.",
  "[ INFO ] Memory leak detected in animations.js → ignored (¯\\_(ツ)_/¯)",
  "[ OK ] SSH Tunnel established (localhost:2222 → 192.168.0.42:22)",
  "[ OK ] Fetching encrypted assets from /etc/portfolio/zaki/assets.enc",
  "[ DATA ] Decrypted 13,842 files (total size: 2.4GB) using RSA-4096 private key",
  "[ DEBUG ] User ‘watcher’ authenticated with viewer privileges (UID=0)",
  "[ INFO ] Running vulnerability scan on local modules...",
  "[ INFO ] Scan complete: 0 critical | 3 moderate | 42 humorous",
  "[ HAX ] Downloading cat memes archive (13GB)... ETA: never",
  "[ PRANK ] printf('hello world') → System crash (jk it’s fine)",
  "[ LOG ] Drinking GUAVA JUICE for maximum confidence...",
  "[ OK ] Portfolio Engine Boot Sequence Started",
  "[ LOADING ] Rendering UI components → <HomePage /> <Projects /> <Contact />",
  "[ INFO ] Attaching shaders for smooth animations...",
  "[ OK ] Ready. Welcome back, the1.",
  "[ OK ] Deploying folio..."
];

function getLogClass(log) {
  if (log.includes("[ OK ]")) return "ok";
  if (log.includes("[ WARN ]")) return "warn";
  if (log.includes("[ ERROR ]")) return "error";
  if (log.includes("[ INFO ]")) return "info";
  if (log.includes("[ DEBUG ]")) return "debug";
  if (log.includes("[ HACK ]") || log.includes("[ HAX ]")) return "hack";
  return "";
}

export default function BootScreen({ onFinish }) {
  const [visibleElements, setVisibleElements] = useState([]);
  const [scrollStopped, setScrollStopped] = useState(false);
  const logSet = useRef(new Set());
  const index = useRef(0);
  const groupCounter = useRef(0);
  const groupSize = useRef(getRandomGroupSize());

  useEffect(() => {
    const interval = setInterval(() => {
      if (index.current >= fakeLogs.length) {
        clearInterval(interval);
        setTimeout(onFinish, 2000);
        return;
      }

      const log = fakeLogs[index.current];

      if (!logSet.current.has(log)) {
        logSet.current.add(log);
        setVisibleElements((prev) => [...prev, { type: "log", content: log }]);
        groupCounter.current++;
      }

      index.current++;

      if (groupCounter.current >= groupSize.current) {
        setVisibleElements((prev) => [...prev, { type: "gap" }]);
        groupCounter.current = 0;
        groupSize.current = getRandomGroupSize();
      }

      if (log === "[ OK ] Ready. Welcome back, the1.") {
        setScrollStopped(true);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="boot-screen">
      <div className={`scrolling-logs ${scrollStopped ? "paused" : ""}`}>
        {visibleElements.map((el, idx) =>
          el.type === "log" ? (
            <pre key={idx} className={`log-line ${getLogClass(el.content)}`}>
              {el.content}
            </pre>
          ) : (
            <div key={idx} className="log-gap" />
          )
        )}
        <span className="cursor" />
      </div>
    </div>
  );
}

function getRandomGroupSize() {
  return Math.floor(Math.random() * 4) + 4;
}
