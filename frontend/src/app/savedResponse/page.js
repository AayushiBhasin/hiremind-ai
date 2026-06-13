"use client";

import { useEffect, useState } from "react";

export default function ReportsPage() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReports();
  }, []);

  async function fetchReports() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reports`)

      const data = await res.json();

      setReports(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="p-10 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl space-y-8 p-6 mt-30">
      <h1 className="text-4xl font-bold text-white">
        Analysis History
      </h1>

      {reports.map((report) => (
        <div
          key={report._id}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
        >
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-xl font-semibold text-white">
              Report #{report._id.slice(-6)}
            </h2>

            <span className="text-sm text-gray-400">
              {new Date(
                report.createdAt
              ).toLocaleString()}
            </span>
          </div>

          {/* Scores */}
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="rounded-xl bg-cyan-500/10 px-5 py-3">
              <p className="text-xs text-gray-400">
                ATS Score
              </p>
              <p className="text-2xl font-bold text-cyan-400">
                {report.atsScore}%
              </p>
            </div>

            <div className="rounded-xl bg-purple-500/10 px-5 py-3">
              <p className="text-xs text-gray-400">
                Match Score
              </p>
              <p className="text-2xl font-bold text-purple-400">
                {report.matchScore}%
              </p>
            </div>
          </div>

          {/* Resume Preview */}
          <div className="mt-6">
            <h3 className="mb-2 font-semibold text-white">
              Resume Preview
            </h3>

            <p className="rounded-lg bg-white/[0.02] p-3 text-sm text-gray-400">
              {report.resumeText?.slice(0, 250)}
              ...
            </p>
          </div>

          {/* JD Preview */}
          <div className="mt-6">
            <h3 className="mb-2 font-semibold text-white">
              Job Description Preview
            </h3>

            <p className="rounded-lg bg-white/[0.02] p-3 text-sm text-gray-400">
              {report.jobDescription?.slice(0, 250)}
              ...
            </p>
          </div>

          {/* Missing Skills */}
          <div className="mt-6">
            <h3 className="mb-3 font-semibold text-white">
              Missing Skills
            </h3>

            <div className="flex flex-wrap gap-2">
              {report.missingSkills?.map(
                (skill, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-red-500/10 px-3 py-1 text-sm text-red-300"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Suggested Keywords */}
          <div className="mt-6">
            <h3 className="mb-3 font-semibold text-white">
              Suggested Keywords
            </h3>

            <div className="flex flex-wrap gap-2">
              {report.suggestedKeywords?.map(
                (keyword, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-300"
                  >
                    {keyword}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Resume Improvements */}
          <div className="mt-6">
            <h3 className="mb-3 font-semibold text-white">
              Resume Improvements
            </h3>

            <ul className="space-y-2">
              {report.resumeImprovements?.map(
                (item, index) => (
                  <li
                    key={index}
                    className="rounded-lg bg-white/[0.02] p-3 text-sm text-gray-300"
                  >
                    • {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Technical Questions */}
          <div className="mt-6">
            <h3 className="mb-3 font-semibold text-white">
              Technical Questions
            </h3>

            <ul className="space-y-2">
              {report.technicalQuestions?.map(
                (question, index) => (
                  <li
                    key={index}
                    className="rounded-lg bg-white/[0.02] p-3 text-sm text-gray-300"
                  >
                    {question}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* HR Questions */}
          <div className="mt-6">
            <h3 className="mb-3 font-semibold text-white">
              HR Questions
            </h3>

            <ul className="space-y-2">
              {report.hrQuestions?.map(
                (question, index) => (
                  <li
                    key={index}
                    className="rounded-lg bg-white/[0.02] p-3 text-sm text-gray-300"
                  >
                    {question}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Project Questions */}
          <div className="mt-6">
            <h3 className="mb-3 font-semibold text-white">
              Project Questions
            </h3>

            <ul className="space-y-2">
              {report.projectBasedQuestions?.map(
                (question, index) => (
                  <li
                    key={index}
                    className="rounded-lg bg-white/[0.02] p-3 text-sm text-gray-300"
                  >
                    {question}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Behavioral Questions */}
          <div className="mt-6">
            <h3 className="mb-3 font-semibold text-white">
              Behavioral Questions
            </h3>

            <ul className="space-y-2">
              {report.BehavioralQuestions?.map(
                (question, index) => (
                  <li
                    key={index}
                    className="rounded-lg bg-white/[0.02] p-3 text-sm text-gray-300"
                  >
                    {question}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}