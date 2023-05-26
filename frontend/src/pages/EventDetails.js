import { Link, useParams } from "react-router-dom";

const EventDetailsPage = () => {
  const params = useParams();
  return (
    <>
      <h1>Event Details Page</h1>
      <p>{params.eId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default EventDetailsPage;
