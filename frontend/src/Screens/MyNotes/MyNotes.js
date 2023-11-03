import React, { useEffect } from 'react';
import './mynotes.css';
import { Accordion, Badge, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainScreen from '../../components/MainScreen/MainScreen';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import ReactMarkdown from 'react-markdown';

const MyNotes = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (!userInfo) {
            navigate("/")
        }
    }, [dispatch, userInfo, navigate]);

    return (
        <>
            <MainScreen title={`Hello World`}>
            
            </MainScreen>
        </>
    );
};

export default MyNotes;
