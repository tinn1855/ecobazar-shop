import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TopBar() {
  return (
    <div className="container mx-auto px-5 py-3 text-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MapPin />
          <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <select>
              <option value="english">Eng</option>
              <option value="vietnam">Vi</option>
            </select>
          </div>
          <div>
            <select>
              <option value="usd">USD</option>
              <option value="vnd">VND</option>
            </select>
          </div>
          <span>|</span>
          <div>
            <Link to="sign-in">Sign In</Link> /{' '}
            <Link to="sign-up">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
