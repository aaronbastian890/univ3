// import axios from '../../req/axios-url';
import { NextResponse } from 'next/server';
// const os = require('os');
// import axios from 'axios'

// export const runtime = 'edge';

// import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler (req , res) {
    try {
      let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress;
      let link;
      if(req.headers['host'].startsWith('localhost')) {
        link = "https://ipinfo.io/json"
      } else {
        link = `https://ipinfo.io/${ip}/json`
      }
      const response = await fetch(link); //https://ipapi.co/json/
      const data = await response.json()
      console.log('data: ', data)
      res.status(200).json(data)
    } catch (ex) {
      console.error('Error fetching data:', ex);
      // return NextResponse.json({ message: `Error Fetching from API: ${ex}` }, { status: 500 });
      res.status(500).json({message: `Error Fetching from api: ${ex}`})

    }

}

function getDeviceIP() {
  const networkInterfaces = os.networkInterfaces();
  let deviceIP = null;

  for (const interfaceName in networkInterfaces) {
      const interfaces = networkInterfaces[interfaceName];
      for (const iface of interfaces) {
          // Skip internal (e.g., localhost) and non-IPv4 addresses
          if (iface.family === 'IPv4' && !iface.internal) {
              deviceIP = iface.address;
              break;
          }
      }
      if (deviceIP) break;
  }

  return deviceIP || 'IP address not found';
}