import React, { useState, useEffect, useRef } from 'react';

interface SkillProps {
  text: string;
  padding?: number;
  fontSize?: number;
  bgColor?: string;
  textColor?: string;
}

const Skill: React.FC<SkillProps> = ({
  text,
  padding = 15,
  fontSize = 20,
  bgColor = '#6291EE',
  textColor = '#EDEDED'
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const { width, height } = textRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, [text]);

  return (
    <div
      style={{
        display: 'inline-block',
        padding: `${padding*0.5}px ${padding * 1.5}px`,
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: '50px',
        fontSize: `${fontSize}px`,
        textAlign: 'center',
      }}
    >
      <div ref={textRef} style={{ visibility: 'hidden', position: 'absolute', whiteSpace: 'nowrap', fontSize: `${fontSize}px` }}>
        {text}
      </div>
      {text}
    </div>
  );
};

export default Skill;
