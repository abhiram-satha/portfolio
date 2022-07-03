import Role from "./Role";
import Summary from "./Summary";

export default function HomePage () {
  return (
    <div className="homepage homepage-flex page">
      <Role />
      <Summary />
    </div>
  )
}