OONI tests specific websites to see if they are blocked, and such websites are
included in what we call "test lists". Each test list contains multiple
categorized URLs which are tested for online censorship and they include the
following:

* [Global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)

* [Country-specific test lists](https://github.com/citizenlab/test-lists/tree/master/lists) 

The global list includes a wide range of internationally relevant websites (most
of which are in English), while each country-specific test list includes
websites that are relevant and commonly accessed within that country (many of
which are in local languages). The URLs included in these lists fall under **[31
categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv)**, ranging from news media, file sharing and
culture, to provocative or objectionable categories, like pornography, political
criticism and hate speech.

When running ooniprobe, you will connect to and download data from the websites
included in the global test list and in the test list which is specific to the
country that you are running ooniprobe from. We therefore encourage you to
review all of the URLs included in these lists carefully, prior to running
ooniprobe, as connecting to some of these websites might be legally questionable
(or illegal) in some jurisdictions around the world.

If you are uncertain of the potential implications of connecting to and
downloading data from the websites listed in the test lists, you can pass your
*own* test list with the following type of command line option:

`ooniprobe <test-name> -f <your-test-list>` 

## Contributing to test lists

The [Citizen Lab](https://citizenlab.org/) has supported network measurement
projects (like OONI) in the creation, maintenance and development of test lists
and many volunteers around the world have contributed to their country's test
lists over the last years. You can also contribute to the review or creation of
your country's test list (if it doesn't already exist), as explained below.

### Reviewing test lists

All test lists that ooniprobe is designed to test for censorship are hosted in
the [Citizen Lab's test-list repository on github](https://github.com/citizenlab/test-lists).

To review country-specific test lists, please follow the steps below:

**Step 1.** Find the *csv* file which is specific to the country that you want
to run ooniprobe from (based on that country's code)
**[here](https://github.com/citizenlab/test-lists/tree/master/lists)**.

If you don't find a csv file for your country, that's probably because it
doesn't exist yet. In this case, please refer to the next section on *"Creating
test lists"*.

**Step 2.** Add *new* URLs to the csv file under the "url" column.  

Some criteria for adding new URLs can include the following:

* The URLs cover topics of socio-political interest within the country;

* The URLs are likely to be blocked because they include sensitive content (for
  example, they touch upon sensitive issues or express political criticism);

* The URLs have been blocked in the past;

* You have faced difficulty connecting to those URLs.

For further criteria, please view the URL categories
**[here](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv)**.

Please try to add URLs which fall under as many (if not all) of these categories
as possible.

**Step 3.** Every time you add a URL, please add the following in the csv file for
  each new URL:

* **Category code:** Add the code of the category that each URL falls under.
This can be added under the "category_code" column of the csv file. The
category codes can be found **[here](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv)**.

* **Category description:** Add the description of the category that each URL
falls under. This can be added under the "category_description" column of
the csv file. The category descriptions can be found
**[here](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv)**.

* **Date:** Add the date of when you added each URL. This can be added under the
"date_added" column of the csv file.

* **Contributor:** *Optional:* Add the name of the organization that you are
 affiliated with, in terms of contributing to the test list. This can be
 added under the "source" column of the csv file.

* **Notes:** *Optional:* Here you can add notes for each URL under the "notes"
 column of the csv file.

**Step 4.** Change the category codes and descriptions for URLs (included under
the "category_code" and "category_description" columns of the csv file) *only
if* you think that those URLs have been allocated to wrong category codes and
descriptions. In this case, please replace the category codes and descriptions
with ones (from the [recommended categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv) that you think are more
suitable. We would also appreciate a comment on
[github](https://github.com/citizenlab/test-lists) or via email explaining the
proposed changes.

**Step 5.** Once you have reviewed a test list based on the above, please submit
 your changes to us. If you're a github user, you can do so through a pull
 request. If you're *not* a github user, please send us a *spreadsheet*
 (including the same format as github csv files) by dropping us an email at
 contact@openobservatory.org (PGP Key Fingerprint: 4C15 DDA9 96C6 C0CF 48BD
 3309 6B29 43F0 0CB1 77B7).

### Creating test lists

If you can't find a test list specific to your country
[here](https://github.com/citizenlab/test-lists/tree/master/lists), then it
probably does not exist yet. Please help us create a test list for your country
through the steps below:

**Step 1.** Create a csv file and name it based on an ISO-3166 two-letter country
code which is specific to the country that URLs are being added for. You can
find a reference for international standards for country codes
**[here](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-country_codes.csv)**. An example would include a csv file created for Andora, named *ad.csv*.

**Step 2.** Include the following columns in the newly created csv file:

* url

* category_code

* category_description

* date_added

* source

* notes

**Step 3.** Add URLs under the "url" column of the csv file. 

Some criteria for adding new URLs can include the following:

* The URLs cover topics of socio-political interest within the country;

* The URLs are likely to be blocked because they include sensitive content (for
  example, they touch upon sensitive issues or express political criticism);

* The URLs have been blocked in the past;

* You have faced difficulty connecting to those URLs.

For further criteria, please view URL categories
**[here](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv)**.

**Step 4.** Every time you add a URL, please add the following in the csv file for
 each new URL:

* **Category code:** Add the code of the category that each URL falls under.
This can be added under the "category_code" column of the csv file. The
category codes can be found **[here](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv)**.

* **Category description:** Add the description of the category that each URL
falls under. This can be added under the "category_description" column of
the csv file. The category descriptions can be found
**[here](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv)**.

* **Date:** Add the date of when you added each URL. This can be added under the
"date_added" column of the csv file.

* **Contributor:** *Optional:* Add the name of the organization that you are
 affiliated with, in terms of contributing to the test list. This can be
 added under the "source" column of the csv file.

* **Notes:** *Optional:* Here you can add notes for each URL under the "notes"
 column of the csv file.

**Step 5.** Once you have created a new test list based on the above, please
 submit your csv file to us. If you're a github user, you can do so through a
 pull request. If you're *not* a github user, please send us your csv file by
 dropping us an email at contact@openobservatory.org (PGP Key Fingerprint: 4C15
 DDA9 96C6 C0CF 48BD  3309 6B29 43F0 0CB1 77B7).
