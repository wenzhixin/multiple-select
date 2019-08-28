/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const MarkdownBlock = CompLibrary.MarkdownBlock /* Used to read markdown */
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props
    const {baseUrl, docsUrl} = siteConfig
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    )

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    )

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    )

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    )

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('download.html')}>Getting started</Button>
            <Button href={docUrl('documentation.html')}>Documentation</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    )
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props
    const {baseUrl} = siteConfig

    const SubTitle = () => (
      <div
        className="productShowcaseSection"
        style={{textAlign: 'center'}}>
        <h2>Designed for HTML Select tag</h2>
        <MarkdownBlock>Multiple Select has been designed to reduce development time and to require no specific knowledge from developers. It is both featherweight and feature-rich.</MarkdownBlock>

        <div id="codefund" style={{width: '330px', margin: '0 auto !important'}}></div>
      </div>
    )

    const Features = () => (
      <div className="container paddingBottom features">
        <div className="wrapper">
          <div className="gridBlock">
            <div className="blockElement fourByGridBlock">
              <div className="blockContent">
                <h2>Features</h2>
                <MarkdownBlock>- Default option allows showing a checkbox.</MarkdownBlock>
                <MarkdownBlock>- Ability to grouping elements.</MarkdownBlock>
                <MarkdownBlock>- Supports to show multiple items in a single row.</MarkdownBlock>
                <MarkdownBlock>- Select all options.</MarkdownBlock>
                <MarkdownBlock>- Feature to show placeholder.</MarkdownBlock>
              </div>
            </div>

            <div className="blockElement fourByGridBlock">
              <div className="blockContent">
                <h2>Latest release v1.3.1 (2019-05-25)</h2>
                <MarkdownBlock>- **Update:** Fixed optgroup selected item display bug ([#431](https://github.com/wenzhixin/multiple-select/pull/431)).</MarkdownBlock>
                <MarkdownBlock>- **Update:** Fixed filter li display blank space bug ([#431](https://github.com/wenzhixin/multiple-select/pull/431)).</MarkdownBlock>
                <MarkdownBlock>- **Update:** Fixed container outer width bug ([#431](https://github.com/wenzhixin/multiple-select/pull/431)).</MarkdownBlock>
                <MarkdownBlock>- **Update:** Updated `addTitle` option to `displayTitle` option ([#431](https://github.com/wenzhixin/multiple-select/pull/431)).</MarkdownBlock>
                <MarkdownBlock>- **Update:** Fixed filter with no select options display bug ([#431](https://github.com/wenzhixin/multiple-select/pull/431)).</MarkdownBlock>
                <MarkdownBlock>- **Update:** Fixed openOnHover bug ([#435](https://github.com/wenzhixin/multiple-select/pull/435)).</MarkdownBlock>
                <MarkdownBlock>- **Update:** Updated `onOptgroupClick` and `onClick` parameters ([#436](https://github.com/wenzhixin/multiple-select/pull/436)).</MarkdownBlock>
                <MarkdownBlock>- **Update:** Updated `formatCountSelected` parameters ([#436](https://github.com/wenzhixin/multiple-select/pull/436)).</MarkdownBlock>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <SubTitle />
          <Features />
        </div>
      </div>
    )
  }
}

module.exports = Index
