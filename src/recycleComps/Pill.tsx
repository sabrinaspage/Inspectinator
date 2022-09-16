interface PillProps {
  title: string;
  color: string;
  textColor: string;
}

export const Pill = ({ title, color, textColor }: PillProps) => (
  <div
    style={{
      borderRadius: "30px",
      backgroundColor: color,
    }}
    className="py-1 px-3 ms-2"
  >
    <p style={{ color: textColor, fontWeight: "500" }} className="m-0">
      <small>{title}</small>
    </p>
  </div>
);

<Pill title="Not Started" color="#FEF3F2" textColor="#F04438" />;
<Pill title="Saved" color="#ECFDF3" textColor="#12B76A" />;
