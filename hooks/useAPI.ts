import { useToast } from '@chakra-ui/core';
import { useEffect, useState } from 'react';

import { IDetails, IRetData } from '../utils/models';

const initState: IDetails = {
  coordinates: [0, 0],
  ip: 'NAN12',
  isp: 'NAN12',
  location: 'NAN12',
  timezone: 'NAN12',
};

const useAPI = (): IRetData => {
  const [ip, setIp] = useState<string | null>(null);
  const [data, setData] = useState<IDetails>(initState);

  const toast = useToast();

  useEffect(() => {
    const g = async () => {
      const res = await fetch('https://api.ipify.org/?format=json');

      if (res.status !== 200) {
        setIp('8.8.8.8');
        return;
      }

      const dataResp = await res.json();
      setIp(dataResp.ip);
    };

    g();
  }, []);

  useEffect(() => {
    const f = async () => {
      if (ip) {
        setData(i => ({
          ...initState,
          coordinates: i.coordinates,
        }));
        const res = await fetch(`/api/geo?id=${ip}`);

        if (res.status !== 200) {
          setData({
            coordinates: [-33.8688, 151.209],
            ip: '1.1.1.1',
            isp: 'Cloudflare, Inc.',
            location: 'Sydney, New South Wales, 1001',
            timezone: '+11:00',
          });
          toast({
            title: 'Please enter a Valid Domain Name/IP Address',
            description: 'Defaulting to 1.1.1.1',
            isClosable: true,
            status: 'warning',
            duration: 10000,
          });
          return;
        }

        const dataResp = await res.json();
        setData(dataResp);
      }
    };

    f();
  }, [ip, toast]);

  return { data, setIp };
};

export default useAPI;
