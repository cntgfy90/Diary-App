import React from 'react';
import DiaryColumnLeft from './DiaryColumnLeft';
import DiaryColumnRight from './DiaryColumnRight';

export default class DiaryApp extends React.Component {
    render() {
        return (
            <div className="DairyApp">
                <DiaryColumnLeft />
                <DiaryColumnRight />
            </div>
        );
    }
};