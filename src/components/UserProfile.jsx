import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider'; // Adjust the path as needed
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase'; // Adjust the path to your Firebase configuration

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      if (user && user.uid) {
        const userDoc = doc(db, 'users', user.uid);
        const docSnapshot = await getDoc(userDoc);

        if (docSnapshot.exists()) {
          setUserData(docSnapshot.data());
        } else {
          console.log("No such document!");
        }
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>User Profile</h1>
      <table style={styles.table}>
        <tbody>
          <tr>
            <td style={styles.td}><strong>Name:</strong></td>
            <td style={styles.td}>{userData.name || 'N/A'}</td>
          </tr>
          <tr>
            <td style={styles.td}><strong>User ID:</strong></td>
            <td style={styles.td}>{user?.uid || 'N/A'}</td>
          </tr>
          <tr>
            <td style={styles.td}><strong>Status:</strong></td>
            <td style={styles.td}>{userData.role || 'N/A'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px', // Top margin to push the content down slightly
  },
  heading: {
    fontSize: '2em',
    marginBottom: '20px', // Space between heading and table
  },
  table: {
    borderCollapse: 'collapse',
    width: '60%',
    textAlign: 'left',
  },
  td: {
    padding: '15px',
    fontSize: '1.2em', // Larger font size for table data
    borderBottom: '1px solid #ddd',
  },
};

export default UserProfile;
