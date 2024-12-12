import { useState, useEffect, useRef } from "preact/hooks";

const ProgressBar = () => {
  const pos1Ref = useRef(null);
  const pos2Ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0; // 3秒経過後にリセット
        }

        // 安全に要素を参照してスタイルを更新
        if (pos1Ref.current && pos2Ref.current) {
          pos1Ref.current.style.width = `${prev}%`;
          pos2Ref.current.style.width = `${100 - prev}%`;
        }

        return prev + 1; // 毎フレーム更新
      });
    }, 30); // 3秒で100%に達するため、30ms間隔

    return () => clearInterval(interval); // クリーンアップ
  }, []);

  return (
    <div class="progress" style={{ display: "flex", width: "100%" }}>
      <div
        class="progress_pos1"
        ref={pos1Ref}
        style={{ background: "blue", height: "20px", width: "0%" }}
      ></div>
      <div
        class="progress_pos2"
        ref={pos2Ref}
        style={{ background: "red", height: "20px", width: "100%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
