/* eslint-disable import/no-unresolved,no-restricted-globals,no-undef */
import { check } from 'k6';
import http from 'k6/http';

// Définit les options du test de charge
export const options = {
  duration: '300s',
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  vus: 2000,
};

export default function () {
  let responses;
  // Premier chargement de l'interface utilisateur
  responses = http.batch([
    ['GET', 'http://apache/wmts?Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fpng'],
    ['GET', 'http://apache/wmts?Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fjpeg'],
  ]);
  check(responses[0], { 'is status 200': (r) => r.status === 200 });
}
