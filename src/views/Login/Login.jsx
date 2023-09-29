import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import PropTypes from 'prop-types'
import Loading from '../../components/Loading'
import AlertMessage from '../../components/AlertMessage'
import {  isNumber } from '../../utils/helper/helper'

// Login form
function Login (props) {
  const { 
    loading, resMessage, modalMessage, status, tab, authFlow, logIn, sendOtp, errEmail, handleChange, email, errPassword, password,verifyOtp, setinputValue1, maxLengthCheck, handleKeyUp, inputValue2, inputValue3, inputValue4, setinputValue2, setinputValue3, setinputValue4, errOtp, inputValue1, close 
  } = props

  return (
    <div className='form-section'>
      {loading && <Loading />}
      <AlertMessage
        close={close}
        message={resMessage}
        modalMessage={modalMessage}
        status={status}
      />
      {tab === 1 && (
        <Form onSubmit={authFlow === 'password' ? logIn : sendOtp}>
          <FormGroup>
            <Label className='match-edit-label' for='email'>Email</Label>
            <Input
              autoFocus
              className={errEmail ? 'league-placeholder-error ' : 'league-placeholder'}
              id='email'
              name='email'
              onChange={(e) => { handleChange(e, 'Email') }}
              placeholder='Enter Your Email'
              type='email'
              value={email}
            />
            <p className='error-text'>{errEmail}</p>
          </FormGroup>

          {authFlow === 'password' && (
            <FormGroup>
              <Label className='match-edit-label' for='password'>Password</Label>
              <Input
                className={errPassword ? 'league-placeholder-error ' : 'league-placeholder'}
                id='password'
                name='password'
                onChange={(e) => { handleChange(e, 'Password') }}
                placeholder='Enter Your Password'
                type='password'
                value={password}
              />
              <p className='error-text'>{errPassword}</p>
            </FormGroup>
          )}
          {authFlow === 'password' && (
            <Button className='theme-btn-login full-btn' disabled={loading} type='submit'>
              Login
            </Button>
          )}
          <Button className='theme-btn-login full-btn mt-2' disabled={loading} type='submit'>
            {authFlow === 'password' ? 'login' : 'Send OTP'}
          </Button>

          {/* <div className='login-text-pwd'>
            <p className='text-center'>Login with Password</p>
          </div> */}
        </Form>
      )}
      {tab === 2 && (
        <Form onSubmit={verifyOtp}>
          <FormGroup>
            <Label className='match-edit-label' for='otp'>OTP</Label>
            <div className='login-otp-input'>
              <input autoComplete="off"
                autoFocus
                maxLength="1"
                name="otp-number-1"
                onChange={(e) => {
                  if (isNumber(Number(e.target.value)) && e.target.value >= 0) {
                    setinputValue1(e.target.value)
                  } else {
                    setinputValue1('')
                  }
                }}
                onInput={maxLengthCheck}
                onKeyUp={e => handleKeyUp(e)}
                tabIndex="1"
                value={inputValue1}
              />

              <input autoComplete="off"
                maxLength="1"
                name="otp-number-2"
                onChange={(e) => {
                  if (isNumber(Number(e.target.value)) && e.target.value >= 0) {
                    setinputValue2(e.target.value)
                  } else {
                    setinputValue2('')
                  }
                }}
                onInput={maxLengthCheck}
                onKeyUp={e => handleKeyUp(e)}
                tabIndex="2"
                value={inputValue2}
              />

              <input autoComplete="off"
                maxLength="1"
                name="otp-number-3"
                onChange={(e) => {
                  if (isNumber(Number(e.target.value)) && e.target.value >= 0) {
                    setinputValue3(e.target.value)
                  } else {
                    setinputValue3('')
                  }
                }}
                onInput={maxLengthCheck}
                onKeyUp={e => handleKeyUp(e)}
                tabIndex="3"
                value={inputValue3}
              />

              <input autoComplete="off"
                maxLength="1"
                name="otp-number-4"
                onChange={(e) => {
                  if (isNumber(Number(e.target.value)) && e.target.value >= 0) {
                    setinputValue4(e.target.value)
                  } else {
                    setinputValue4('')
                  }
                }}
                onInput={maxLengthCheck}
                onKeyUp={e => handleKeyUp(e)}
                tabIndex="4"
                value={inputValue4}
              />

            </div>
            <p className='error-text'>{errOtp}</p>
          </FormGroup>

          <Button className='theme-btn-login full-btn' disabled={loading} type='submit'>
            Login
          </Button>

          {/* <div className='login-text-otp'>
            <p>Didn`t receive OTP? <span className='login-span'>Resend</span><span></span></p>
            <p className='p2'>Login with Password</p>
          </div> */}
        </Form>
      )}
      {/* {tab === 2 &&
        <Form onSubmit={verifyOtp}>
        <FormGroup>
          <Label for='otp'>OTP</Label>
          <Input
            type='number'
            name='otp'
            id='otp'
            placeholder='Enter Your OTP'
            value={otp}
            onChange={(e) => {
              handleChange(e, 'otp')
            }}
          />
          <p className='error-text'>{errOtp}</p>
        </FormGroup>

          <Button type='submit' className='theme-btn-login full-btn' disabled={loading}>
            Login
          </Button>
        </Form>
      } */}
    </div>
  )
}

Login.propTypes = {
  loading: PropTypes.bool,
  resMessage: PropTypes.string,
  modalMessage: PropTypes.bool,
  status: PropTypes.bool,
  tab: PropTypes.string,
  errOtp: PropTypes.string,
  authFlow: PropTypes.func,
  logIn: PropTypes.func,
  sendOtp: PropTypes.func,
  errEmail: PropTypes.string,
  handleChange: PropTypes.func,
  email: PropTypes.string,
  errPassword: PropTypes.string,
  password: PropTypes.string,
  verifyOtp: PropTypes.func,
  setinputValue1: PropTypes.func,
  maxLengthCheck: PropTypes.func,
  handleKeyUp: PropTypes.func,
  inputValue1: PropTypes.string,
  inputValue2: PropTypes.string,
  inputValue3: PropTypes.string,
  inputValue4: PropTypes.string,
  setinputValue2: PropTypes.func,
  setinputValue3: PropTypes.func,
  setinputValue4: PropTypes.func,
  close: PropTypes.bool
}

export default Login
