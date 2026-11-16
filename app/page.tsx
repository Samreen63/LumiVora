export default function Home() {
  return (
    <main style={{
      minHeight: "100svh",
      display: "grid",
      placeItems: "center",
      margin: 0,
      fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
      background: "radial-gradient(circle at 20% 10%, #2b2250, transparent 40%), #05070d",
      color: "#f5f7ff",
      textAlign: "center",
      padding: "2rem"
    }}>
      <div>
        <p style={{letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "0.75rem", color: "#96a2ba", marginBottom: "1rem"}}>Website under construction</p>
        <h1 style={{fontSize: "clamp(2.5rem, 7vw, 4.5rem)", margin: "0 0 1rem", lineHeight: 1.05}}>Something extraordinary is on the way.</h1>
        <p style={{fontSize: "1.1rem", color: "#96a2ba", margin: 0}}>We are building a new experience at <strong style={{color:"#f5f7ff"}}>LumiVora</strong>. Launching in <strong style={{color:"#f5f7ff"}}>3 days</strong>.</p>
      </div>
    </main>
  );
}
