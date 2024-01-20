/* eslint-disable react/no-unescaped-entities */
import { graphql, Link } from "gatsby";
import React, { useEffect } from "react";
import { Block } from "../components/block";
import Text, { TextBlock } from "../components/typography";
import Img from "gatsby-image";
import "../style.scss";
import Avatar from "../components/avatar";
import SEO from "../components/seo";
import Button, { LinkButton } from "../components/button";
import { EmailBlock } from "../components/email-bar";
import { Icon } from "../components/icon";

// @ts-expect-error any error new
function IndexPage({ data }) {
  useEffect(() => {
    setTimeout(
      () => document.querySelector(".heart-image")?.classList.add("tilt"),
      100,
    );
  }, []);
  return (
    <div className="main-content">
      <SEO />
      <div className="container">
        <div className="intro">
          <h1>HI, I'M SAM</h1>
          <h2 className="subtext">
            I design and code beautifully simple things.
          </h2>
          <p>
            I'm that <b>Frontend Engineer</b> who comes up with creative CSS
            ideas at 2.00 am. Who always tries to reduce the no. of lines in any
            given file. <br />
            <br /> A <b>Javascript developer</b> who thinks that -{" "}
            <em>"There is always a simpler way to solve a problem."</em>
          </p>
          <p>❤ ❤ ❤</p>
        </div>
        <div className="image heart-image">
          <div className="heart"></div>
          <div className="hcard"></div>
        </div>
      </div>
      <div className="section blog">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <div className="section__title" style={{ marginBottom: 0 }}>
            Blog
          </div>
          <Link to={"/blog/"} className="gradient">
            <Button
              type="secondary"
              style={{
                width: 200,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Read more
            </Button>
          </Link>
        </div>
        <div className="wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fillOpacity="1"
              d="M0,320L34.3,298.7C68.6,277,137,235,206,234.7C274.3,235,343,277,411,293.3C480,309,549,299,617,266.7C685.7,235,754,181,823,133.3C891.4,85,960,43,1029,37.3C1097.1,32,1166,64,1234,106.7C1302.9,149,1371,203,1406,229.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
          <div className="end"></div>
        </div>
        <div className="blogs">
          {data.allMdx.nodes.map(
            (
              { frontmatter: { date, title, path, heroImage, tags } },
              i: number,
            ) => (
              <Link to={path} key={i}>
                <div className="card">
                  <div className="card__image">
                    <Img
                      fluid={heroImage?.childImageSharp?.fluid}
                      alt={title}
                    />
                  </div>
                  <div className="card__details">
                    <div className="card__date text-regularLight">{date}</div>
                    <div className="card__title">
                      <h3>{title}</h3>
                    </div>
                    <Block
                      display="flex"
                      gap={48}
                      alignItems="center"
                      className="date-tag"
                    >
                      <div className="tags">
                        {tags.map((tag: any, i: number) => (
                          <div className="tag" key={i}>
                            {tag}
                          </div>
                        ))}
                      </div>
                    </Block>
                  </div>
                </div>
              </Link>
            ),
          )}
          <div className="card read-more">
            <div className="card__image">
              <Img fixed={data.book.childImageSharp.fixed}></Img>
            </div>
            <div className="card__details">
              <div className="card__title">
                <h2>I write about Javascript, CSS, and all things web.</h2>
              </div>
              <div className="card__description">
                If you love to read tech blogs? I got you covered. I post new
                content <b>every month.</b> I write about web,{" "}
                <b>
                  ReactJS, Typescript, NodeJS, CSS, Developer productivity tips,{" "}
                </b>{" "}
                etc.
              </div>

              <Block
                spacing={[24, 34]}
                gap={16}
                className="subscribe-container"
              >
                <h3>You should see my,</h3>
                <ul>
                  <li>
                    <b>
                      <Link to="/journey" className="fancy-href">
                        Journey{" "}
                      </Link>
                    </b>
                    an interesting depiction of my career
                  </li>
                  <li>
                    <Link to="/about-me/coding-activity" className="fancy-href">
                      Coding activity
                    </Link>
                    what I do with my laptop
                  </li>
                </ul>
              </Block>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section__title">Projects</div>
        <div className="cards">
          <Link
            to="/projects/quotes-generator"
            className="gradient card-container"
          >
            <div className="card featured card__details">
              <div className="card__title text-title2">
                <h3>Quotes Generator</h3>
              </div>
              <div className="card__description">
                A tool that helps you to create motivational quotes with
                backgrounds.
              </div>
              <div className="text-caption technologies">
                HTML Canvas, CSS, jQuery, UnsplashAPI, React
              </div>
            </div>
          </Link>
          <Link to="/projects/pasttenser" className="gradient card-container">
            <div className="card card__details">
              <div className="card__title text-title2">
                <h3>PastTenser</h3>
              </div>
              <div className="card__description">
                An API that can give you the pastense of any verb that is
                provided.
              </div>
              <div className="text-caption technologies">
                ExpressJS, KnockoutJS, jQuery, NodeJs, CSS3, HTML5
              </div>
            </div>
          </Link>
          <a
            href="https://samuellawrentz.github.io/highcharts-networkChart/"
            target="_blank"
            className="gradient card-container"
            rel="noreferrer"
          >
            <div className="card card__details">
              <div className="card__title text-title2">
                <h3>Network chart</h3>
              </div>
              <div className="card__description">
                This is a network chart built using Highchart APIs - helps you
                visualise connections.
              </div>
              <div className="text-caption technologies">
                Vannila Javascript, Highcharts Custom module, SVG, HTML, CSS
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="section">
        <div className="section__title friends-title">
          We can be{" "}
          <Img
            fixed={data.friendsLogo.childImageSharp.fixed}
            alt="We can be friends"
            className="friendsLogo"
          />
        </div>
        <div>
          <TextBlock spacing={[0, 25]}>
            I’m the kind of person who likes to connect with new people.
            <br />
            Who also likes to learn new technologies.
            <br />
            <TextBlock type="regular" spacing={[40, 20]}>
              There is lot more, try searching me on{" "}
              <a
                href="https://www.google.com/search?q=samuel lawrentz"
                target="_blank"
                rel="noreferrer"
              >
                Google!
              </a>{" "}
            </TextBlock>
          </TextBlock>
          <Block display="flex" alignItems="center" gap={16}>
            <Avatar
              style={{ width: 150, height: 150, marginTop: -18 }}
              eyeType="Hearts"
              mouthType="Smile"
            />
            <Block>
              <Text type="title2">Samuel Lawrentz</Text>
              <TextBlock type="regular" spacing={[16]}>
                Software Development Engineer UI -{" "}
                <a href="https://plivo.com" target="_blank" rel="noreferrer">
                  Plivo
                </a>
              </TextBlock>
              <Block display="flex" gap={12} spacing={[12]}>
                <Text type="caption">
                  <a
                    href="https://github.com/samuellawrentz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </Text>
                <Text type="caption">
                  <a href="https://in.linkedin.com/in/samuel-lawrentz">
                    Linkedin
                  </a>
                </Text>
                <Text type="caption">
                  <a href="https://twitter.com/samuellawrentz">Twitter</a>
                </Text>
                <Text type="caption">
                  <a href="https://codepen.io/samuellawrentz">Codepen</a>
                </Text>
              </Block>
              <Block>
                <LinkButton
                  className="gradient"
                  type="secondary"
                  size="small"
                  target="_blank"
                  to="https://resume.io/r/71xcDAIDW"
                >
                  <Block display="flex" gap={8} alignItems="center">
                    <Icon name="launch" size={16}></Icon>
                    <span>View Resume</span>
                  </Block>
                </LinkButton>
              </Block>
            </Block>
          </Block>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;

export const query = graphql`
  {
    friendsLogo: file(relativePath: { eq: "home/friends_logo.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    work: file(relativePath: { eq: "home/work.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    personal: file(relativePath: { eq: "home/personal.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    book: file(relativePath: { eq: "home/book.webp" }) {
      childImageSharp {
        fixed(height: 350) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { published: { eq: true } } }
      limit: 4
    ) {
      nodes {
        id
        excerpt(pruneLength: 140)
        frontmatter {
          title
          date(formatString: "DD MMM, YYYY")
          path
          tags
          heroImage {
            childImageSharp {
              fluid(maxWidth: 240) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
