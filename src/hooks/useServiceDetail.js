import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useServiceDetail = (serviceId) => {
  const [service, setService] = useState({});

  useEffect(() => {
    const url = `https://genius-car-service-server-jtj4.onrender.com/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return [service, setService];
};

export default useServiceDetail;
