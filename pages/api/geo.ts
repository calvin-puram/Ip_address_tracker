import net from 'net';
import { NextApiHandler } from 'next';
import validator from 'validator';

import { IDetails } from '../../utils/models';

type TRes = IDetails | { error: string };

const handler: NextApiHandler<TRes> = async (req, res) => {
  const apiKey = process.env.KEY;

  const { id } = req.query;
  const queryReq = id as string;

  let url = `NA`;
  if (net.isIP(queryReq) !== 0) {
    url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${queryReq}`;
  } else if (validator.isFQDN(queryReq)) {
    url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&domain=${queryReq}`;
  } else {
    url = `NA`;
  }

  if (url === 'NA') {
    res.status(400);
    res.send({ error: 'Bad Request' });
    return;
  }

  const geoApiResponse = await fetch(url);

  if (geoApiResponse.status !== 200) {
    res.status(geoApiResponse.status);
    res.send({ error: 'An Error Occurred' });
    return;
  }

  const data = await geoApiResponse.json();

  const x: IDetails = {
    ip: data.ip,
    isp: data.isp,
    location: `${data.location.city}, ${data.location.region}, ${data.location.postalCode}`,
    timezone: data.location.timezone,
    coordinates: [data.location.lat, data.location.lng],
  };

  res.status(200).json(x);
};

export default handler;
