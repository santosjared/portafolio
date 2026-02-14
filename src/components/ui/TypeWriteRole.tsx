"use client";
import React, { useState, useEffect } from "react";

export const TypewriterRole = ({ text }: { text: string }) => {
  const START_INDEX = 6;
  const [role, setRole] = useState(text.slice(0, START_INDEX));
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = text;
      if (!isDeleting) {
        setRole(fullText.slice(0, role.length + 1));
        setSpeed(150);

        if (role.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
          setSpeed(500);
        }
      } else {
        setRole(fullText.slice(0, role.length - 1));
        setSpeed(75);

        if (role.length === START_INDEX) {
          setIsDeleting(false);
          setSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [role, isDeleting, text, speed]);

  return (
    <span className="font-mono">
      {role}
      <span className="ml-1 border-r-2 border-blue-500 animate-pulse">
        &nbsp;
      </span>
    </span>
  );
};