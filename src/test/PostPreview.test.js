import React from 'react';
import { shallow } from 'enzyme';
import PostPreview from '../components/PostPreview';

describe('<PostPreview/>', () => {
    it ('Simple Reader Works', () => {
        const component = shallow(<PostPreview/>);
        expect(component).toMatchSnapshot();
    });

    it ('Render with props works', () => {
        const component = shallow(
            <PostPreview _id={'1234567890'} title={'post test'}/>
        );
        expect(component.find('.post-title').text()).toBe('post test');
    });

});