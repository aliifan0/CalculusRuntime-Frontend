import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProgressProvider } from "./pages/ProgressContext";
import Layout from "./components/Layout";
import ScrollToTop from "./utils/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AISolver from "./pages/AISolver";
import NotFound from "./pages/NotFound";
import CourseHub from "./pages/CourseHub";
import SimpleConcepts from "./pages/SimpleConcepts";
import ConceptExplore from "./pages/ConceptExplore";

import IntegralsPart1 from "./pages/IntegralsPart1";
import IntegralsPart2 from "./pages/IntegralsPart2";
import PartialPart1 from "./pages/PartialPart1";
import PartialPart2 from "./pages/PartialPart2";
import VectorPart1 from "./pages/VectorPart1";
import VectorPart2 from "./pages/VectorPart2";
import LimitsPart1 from "./pages/LimitsPart1";
import LimitsPart2 from "./pages/LimitsPart2";
import TaylorPart1 from "./pages/TaylorPart1";
import TaylorPart2 from "./pages/TaylorPart2";
import LagrangePart1 from "./pages/LagrangePart1";
import LagrangePart2 from "./pages/LagrangePart2";
import StokesPart1 from "./pages/StokesPart1";
import StokesPart2 from "./pages/StokesPart2";
import DivergencePart1 from "./pages/DivergencePart1";
import DivergencePart2 from "./pages/DivergencePart2";
import PractiseSection from "./pages/PractiseSection";
import PersonalizedStudyPlan from "./pages/PersonalizedStudyPlan";
import ContinuityFinder from "./pages/ContinuityFinder";
import ExtremeValueFunction from "./pages/ExtremeValueFinder";
import VolumeCalculator from "./pages/VolumeCalculator";
import DerivativeTool from "./components/DerivativeTool";
import VectorFieldVisualizer from "./pages/VectorFieldVisualizer";
import CheatSheet from "./pages/CheatSheet";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <BrowserRouter>
          <ErrorBoundary>
            <ScrollToTop />
            <Routes>
              {/* Home */}
              <Route path="/" element={<Layout body={<Home />} />} />

              {/* Auth */}
              <Route path="/login"     element={<Login />} />
              <Route path="/signup"    element={<Signup />} />
              <Route path="/dashboard" element={<Layout body={<Dashboard />} />} />

              {/* Course hubs (Choose a path) */}
              <Route path="/courses/:courseId" element={<Layout body={<CourseHub />} />} />

              {/* Simple Concepts */}
              <Route path="/simple-concepts" element={<Layout body={<SimpleConcepts />} />} />
              <Route path="/simple-concepts/:slug" element={<Layout body={<ConceptExplore />} />} />

              {/* AI Solver */}
              <Route path="/ai-solver" element={<Layout body={<AISolver />} />} />

              {/* Partial Derivatives */}
              <Route path="/partial-derivatives"   element={<Navigate to="/partial-derivatives/1" replace />} />
              <Route path="/partial-derivatives/1" element={<Layout body={<PartialPart1 />} />} />
              <Route path="/partial-derivatives/2" element={<Layout body={<PartialPart2 />} />} />

              {/* Vector Calculus */}
              <Route path="/vector-calculus"   element={<Navigate to="/vector-calculus/1" replace />} />
              <Route path="/vector-calculus/1" element={<Layout body={<VectorPart1 />} />} />
              <Route path="/vector-calculus/2" element={<Layout body={<VectorPart2 />} />} />
              <Route path="/vectorfield"       element={<Layout body={<VectorFieldVisualizer />} />} />

              {/* Limits & Continuity */}
              <Route path="/limits-continuity"   element={<Navigate to="/limits-continuity/1" replace />} />
              <Route path="/limits-continuity/1" element={<Layout body={<LimitsPart1 />} />} />
              <Route path="/limits-continuity/2" element={<Layout body={<LimitsPart2 />} />} />

              {/* Multiple Integrals */}
              <Route path="/multiple-integrals"   element={<Navigate to="/multiple-integrals/1" replace />} />
              <Route path="/multiple-integrals/1" element={<Layout body={<IntegralsPart1 />} />} />
              <Route path="/multiple-integrals/2" element={<Layout body={<IntegralsPart2 />} />} />

              {/* Taylor Series */}
              <Route path="/taylor-series"   element={<Navigate to="/taylor-series/1" replace />} />
              <Route path="/taylor-series/1" element={<Layout body={<TaylorPart1 />} />} />
              <Route path="/taylor-series/2" element={<Layout body={<TaylorPart2 />} />} />

              {/* Lagrange Multipliers */}
              <Route path="/lagrange-multipliers"   element={<Navigate to="/lagrange-multipliers/1" replace />} />
              <Route path="/lagrange-multipliers/1" element={<Layout body={<LagrangePart1 />} />} />
              <Route path="/lagrange-multipliers/2" element={<Layout body={<LagrangePart2 />} />} />

              {/* Stokes Theorem */}
              <Route path="/stokes-theorem"   element={<Navigate to="/stokes-theorem/1" replace />} />
              <Route path="/stokes-theorem/1" element={<Layout body={<StokesPart1 />} />} />
              <Route path="/stokes-theorem/2" element={<Layout body={<StokesPart2 />} />} />

              {/* Divergence and Curl */}
              <Route path="/divergence-curl"   element={<Navigate to="/divergence-curl/1" replace />} />
              <Route path="/divergence-curl/1" element={<Layout body={<DivergencePart1 />} />} />
              <Route path="/divergence-curl/2" element={<Layout body={<DivergencePart2 />} />} />

              {/* Tools */}
              <Route path="/test"                  element={<Layout body={<ContinuityFinder />} />} />
              <Route path="/extreme"               element={<Layout body={<ExtremeValueFunction />} />} />
              <Route path="/volumecalculator"      element={<Layout body={<VolumeCalculator />} />} />
              <Route path="/derivative-visualizer" element={<Navigate to="/taylorx" replace />} />
              <Route path="/taylorx"               element={<Layout body={<DerivativeTool />} />} />
              <Route path="/cheatsheet"            element={<Layout body={<CheatSheet />} />} />

              {/* Practice Section */}
              <Route path="/practice"   element={<Layout body={<PractiseSection />} />} />

              {/* AI Personalized Study Plan */}
              <Route path="/study-plan" element={<Layout body={<PersonalizedStudyPlan />} />} />

              {/* Objective 14 — Opt-in peer leaderboard */}
              <Route path="/leaderboard" element={<Layout body={<Leaderboard />} />} />

              {/* Catch-all */}
              <Route path="*" element={<Layout body={<NotFound />} />} />
            </Routes>
          </ErrorBoundary>
        </BrowserRouter>
      </ProgressProvider>
    </AuthProvider>
  );
}

export default App;
