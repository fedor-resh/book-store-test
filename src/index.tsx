import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BookStore from './BookStore';
import {RecoilRoot} from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RecoilRoot>
        <BookStore />
    </RecoilRoot>
);


