export default function Example() {
  return (
    <fieldset className="border-t border-b border-gray-200">
      <legend className="sr-only">Notifications</legend>
      <div className="divide-y divide-gray-200">
        <div className="relative flex items-start py-4">
          <div className="min-w-0 flex-1 text-sm">
            <label htmlFor="list_blogs" className="font-medium text-gray-700">
              List blogs
            </label>
          </div>
          <div className="ml-3 flex h-5 items-center">
            <input
              id="list_blogs"
              aria-describedby="list_blogs"
              name="list_blogs"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="relative flex items-start py-4">
          <div className="min-w-0 flex-1 text-sm">
            <label htmlFor="candidates" className="font-medium text-gray-700">
              Speak at a meetup or conference
            </label>
          </div>
          <div className="ml-3 flex h-5 items-center">
            <input
              id="candidates"
              aria-describedby="candidates-description"
              name="candidates"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="relative flex items-start py-4">
          <div className="min-w-0 flex-1 text-sm">
            <label htmlFor="network" className="font-medium text-gray-700">
              Find meaningful networking connections
            </label>
          </div>
          <div className="ml-3 flex h-5 items-center">
            <input
              id="network"
              aria-describedby="network-description"
              name="network"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="relative flex items-start py-4">
          <div className="min-w-0 flex-1 text-sm">
            <label htmlFor="job" className="font-medium text-gray-700">
              List or find a job
            </label>
          </div>
          <div className="ml-3 flex h-5 items-center">
            <input
              id="job"
              aria-describedby="job-description"
              name="job"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="relative flex items-start py-4">
          <div className="min-w-0 flex-1 text-sm">
            <label htmlFor="advertise" className="font-medium text-gray-700">
              Advertise your company
            </label>
          </div>
          <div className="ml-3 flex h-5 items-center">
            <input
              id="advertise"
              aria-describedby="advertise-description"
              name="advertise"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>
    </fieldset>
  );
}
