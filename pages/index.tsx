import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

import Card from '../components/card/Card';
import Header from '../components/Header';
import InputForm from '../components/InputForm';
import useAPI from '../hooks/useAPI';

const MyMap = dynamic(() => import('../components/Map'), { ssr: false });

const AppHome: React.FC = () => {
  const { data, setIp } = useAPI();

  return (
    <>
      <Head>
        <title>Frontend Mentor | IP Address Tracker</title>
        <meta
          name="description"
          content="Frontend Mentor Challenge | IP Address Tracker - By Vishnumohan R K"
        />
      </Head>

      <main>
        <Header form={<InputForm submit={setIp} />} card={<Card {...data} />} />
        <MyMap
          coordinates={data.coordinates}
          ip={data.ip}
          address={data.location}
        />
      </main>
    </>
  );
};

export default AppHome;
