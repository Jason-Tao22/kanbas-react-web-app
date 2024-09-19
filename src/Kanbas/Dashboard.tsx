import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack Software Developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/2345/Home"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS2345 Node JS</h5>
              <p className="wd-dashboard-course-title">
                Backend Development with Node.js
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/3456/Home"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS3456 Angular</h5>
              <p className="wd-dashboard-course-title">
                Frontend Framework with Angular
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/4567/Home"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS4567 Vue.js</h5>
              <p className="wd-dashboard-course-title">
                Progressive Framework Vue.js
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/5678/Home"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS5678 Python Programming</h5>
              <p className="wd-dashboard-course-title">
                Python for Software Engineers
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/6789/Home"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS6789 Java Development</h5>
              <p className="wd-dashboard-course-title">
                Advanced Java Programming
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/7890/Home"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS7890 Ruby on Rails</h5>
              <p className="wd-dashboard-course-title">
                Web Development with Ruby on Rails
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
