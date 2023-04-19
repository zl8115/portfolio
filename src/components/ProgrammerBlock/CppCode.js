// Library Imports
import React from 'react';

// Context Import
import { ThemeContext } from '../../context/Theme';

const lightModeColors = {
  functions: '#795E26',
  type: '#267f99',
  keywords: '#AF00DB',
  vars: '#001080',
  constants: '#0070C1',
  parentSelector: '#800000',
  numberLiteral: '#098658',
  stringLiteral: '#a31515'
}

const darkModeColors = {
  functions: '#DCDCAA',
  type: '#4EC9B0',
  keywords: '#C586C0',
  vars: '#9CDCFE',
  constants: '#4FC1FF',
  parentSelector: '#d7ba7d',
  numberLiteral: '#b5cea8',
  stringLiteral: '#ce9178'
}

export default function CppCode() {
  const { isDarkMode } = React.useContext(ThemeContext);

  const colors = isDarkMode ? darkModeColors : lightModeColors;
  
  const HTMLTab = () => {
    return (
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
    )
  };
  
  const Keyword = (props) => {
    return(
      <span style={{color: colors.keywords}}>
        {props.children}
      </span>
    )
  }
  
  const Function = (props) => {
    return(
      <span style={{color: colors.functions}}>
        {props.children}
      </span>
    )
  }
  
  const Type = (props) => {
    return(
      <span style={{color: colors.type}}>
        {props.children}
      </span>
    )
  }
  
  const Constant = (props) => {
    return(
      <span style={{color: colors.constants}}>
        {props.children}
      </span>
    )
  }
  
  const StringLiteral = (props) => {
    return(
      <span style={{color: colors.stringLiteral}}>
        {props.children}
      </span>
    )
  }
  
  const NumberLiteral = (props) => {
    return(
      <span style={{color: colors.numberLiteral}}>
        {props.children}
      </span>
    )
  }
  
  const ParentSelector = (props) => {
    return(
      <span style={{color: colors.parentSelector}}>
        {props.children}
      </span>
    )
  }
  
  const Variable = (props) => {
    return(
      <span style={{color: colors.vars}}>
        {props.children}
      </span>
    )
  }

  return(
    <React.Fragment>

    <Keyword>#ifndef</Keyword> <Constant>_ZE_RONG_LUM_HPP_</Constant> <br/>
    <Keyword>#define</Keyword> <Constant>_ZE_RONG_LUM_HPP_</Constant> <br/>
    <br/>
    <Keyword>#include</Keyword> <StringLiteral>"human.hpp"</StringLiteral> <br/>
    <Keyword>#include</Keyword> <StringLiteral>"professions.hpp"</StringLiteral> <br/>
    <br/>
    <Constant>class</Constant> <Type>ZeRongLum</Type><Keyword>()</Keyword>: <Constant>public</Constant> <Type>Human</Type>, <Type>SoftwareDeveloper</Type> <br/>
    <ParentSelector>{'{'}</ParentSelector> <br/>
    <HTMLTab/><Function>ZeRongLum</Function><Keyword>()</Keyword>: <br/>
    <HTMLTab/><HTMLTab/><Function>Human</Function><Keyword>(</Keyword><StringLiteral>"Ze Rong Lum"</StringLiteral>, <StringLiteral>"male"</StringLiteral>, <StringLiteral>"1996-09-06"</StringLiteral><Keyword>)</Keyword>, <br/>
    <HTMLTab/><HTMLTab/><Function>SoftwareDeveloper</Function><Keyword>()</Keyword> <br/>
    <HTMLTab/><Keyword>{'{'}</Keyword> <br/>
    <HTMLTab/><HTMLTab/><Type>SoftwareDeveloper</Type>::<Function>addEmployer</Function><Constant>(</Constant><StringLiteral>"OpenText"</StringLiteral>,<StringLiteral>"2021-01-23"</StringLiteral><Constant>)</Constant>; <br/>
    <HTMLTab/><HTMLTab/><Type>SoftwareDeveloper</Type>::<Function>addExperience</Function><Constant>(</Constant><StringLiteral>"C++"</StringLiteral>, years=<NumberLiteral>2</NumberLiteral><Constant>)</Constant>; <br/>
    <HTMLTab/><HTMLTab/><Type>SoftwareDeveloper</Type>::<Function>addExperience</Function><Constant>(</Constant><StringLiteral>"C"</StringLiteral>, years=<NumberLiteral>2</NumberLiteral><Constant>)</Constant>; <br/>
    <HTMLTab/><HTMLTab/><Type>SoftwareDeveloper</Type>::<Function>addExperience</Function><Constant>(</Constant><StringLiteral>"Python"</StringLiteral><Constant>)</Constant>; <br/>
    <HTMLTab/><Keyword>{'}'}</Keyword> <br/>
    <br/>
    <HTMLTab/><Type>std</Type>::<Type>string</Type> <Function>desribe</Function><Keyword>()</Keyword>; <br/>
    <HTMLTab/><Type>std</Type>::<Type>string</Type> <Function>code</Function><Keyword>(</Keyword><Constant>const</Constant> <Type>std</Type>::<Type>string</Type><Constant>&</Constant> <Variable>prompt</Variable>, <Constant>const</Constant> <Type>std</Type>::<Type>string</Type><Constant>&</Constant> <Variable>language</Variable>=<StringLiteral>"C++"</StringLiteral><Keyword>)</Keyword>; <br/>
    
    <ParentSelector>{'}'}</ParentSelector>; <br/>
    <br/>
    <Keyword>#endif</Keyword><br/>

    </React.Fragment>
  );
}