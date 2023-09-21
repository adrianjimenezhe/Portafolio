import React from "react";

function Menu() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <section className={`container2 ${isActive ? "active" : ""}`}>
      <img src={profile} alt="photo" />
      <h2>Adrian Jiménez Hernández</h2>
    </section>
  );
}

export default Menu;
