import React, { useRef, useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/common/GlobalStyle';
import About from 'components/main/About';
import Projects from 'components/main/Projects';
import { graphql } from 'gatsby';
import { PostListType } from 'components/main/PostList/types';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import NavBar from 'components/main/NavBar';
import Contact from 'components/main/Contact';
import { FULL_PAGES } from 'utils';

interface Props {
  data: {
    allMarkdownRemark: {
      edges: PostListType[];
    };
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

const Home: React.FC<Props> = ({
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) => {
  const outerRef = useRef<any>();
  // const outerRef = useRef<HTMLDivElement>(null);
  const pageCount = useRef(3);
  const currentPage = useRef(0);
  const [currentPageName, setCurrentPageName] = useState(FULL_PAGES[currentPage.current]);

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();

      const screenHeight = window.innerHeight;
      const { deltaY } = e;

      if (deltaY > 0 && currentPage.current < pageCount.current) {
        currentPage.current += 1;
        outerRef.current.scrollTo({
          top: screenHeight * currentPage.current,
          left: 0,
          behavior: 'smooth',
        });
        setCurrentPageName(FULL_PAGES[currentPage.current]);
      } else if (deltaY < 0 && currentPage.current > 0) {
        currentPage.current -= 1;
        outerRef.current.scrollTo({
          top: screenHeight * currentPage.current,
          left: 0,
          behavior: 'smooth',
        });
        setCurrentPageName(FULL_PAGES[currentPage.current]);
      }
    };

    outerRef.current?.addEventListener('wheel', wheelHandler);

    return () => {
      outerRef.current?.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  useEffect(() => {
    const resizeHandler = () => {
      outerRef.current.scrollTo({
        top: window.innerHeight * currentPage.current,
        left: 0,
        behavior: 'smooth',
      });
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  });

  const projects = useMemo(
    () =>
      edges.filter(
        ({
          node: {
            frontmatter: { type },
          },
        }) => type === 'Project',
      ),
    [],
  );

  const blogs = useMemo(
    () =>
      edges.filter(
        ({
          node: {
            frontmatter: { type },
          },
        }) => type === 'Blog',
      ),
    [],
  );

  return (
    <Background ref={outerRef} className="outer">
      <NavBar currentPageName={currentPageName} />
      <About image={gatsbyImageData} />
      <Projects posts={projects} />
      <Projects posts={blogs} />
      <Contact />
      <GlobalStyle />
    </Background>
  );
};

export default Home;

const Background = styled.div`
  height: 100vh;
  overflow-y: auto;
  &::--webkit-scrollbar {
    display: none;
  }

  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;
`;

export const getData = graphql`
  query getData {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
            type
          }
        }
      }
    }
    file(name: { eq: "profile" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
    }
  }
`;