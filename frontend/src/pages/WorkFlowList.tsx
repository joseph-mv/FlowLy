import { useEffect, useState } from "react";

import { Workflow } from "../types/component";
import { getWorkList } from "../services/workflowServices";
import WorkFlow from "../components/workflowList/WorkFlow";
import { Pagination } from "../components/workflowList/Pagination";

const ITEMS_PER_PAGE = 5;

/**
 * **WorkflowList Page**
 * - Displays a paginated list of workflows.
 * - Fetches workflow data from the API.
 */
const WorkflowList = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [workflows, setWorkflows] = useState<Workflow[]>([]);

  const totalPages = Math.ceil(workflows.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentWorkflows = workflows.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Fetch workflows from the API
  useEffect(() => {
    const fetchWorkflows = async () => {
      setLoading(true);
      setError("");

      try {
        const data = await getWorkList();
        if (data) {
          setWorkflows(data);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to load workflows.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWorkflows();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-6 min-h-[80vh]">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Workflows</h1>

      {/* Display loading state */}
      {loading && (
        <p className="text-center text-gray-600">Loading workflows...</p>
      )}

      {/* Display error message */}
      {error && <p className="text-center text-red-500">{error}</p>}
     
      {!loading && !error && workflows.length > 0 && (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created At
                </th>
                <th className=" w-[20%] px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentWorkflows.map((workflow) => (
                <WorkFlow workflow={workflow} setWorkflows={setWorkflows} />
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default WorkflowList;
