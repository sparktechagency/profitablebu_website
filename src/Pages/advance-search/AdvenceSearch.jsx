import React from 'react';
import PageTitle from '../../shared/PageTitle';
import { Col, ConfigProvider, Form, Row, Select } from 'antd';
import {
  businessTypes,
  categories,
  countries,
  location,
  ownershipTypes,
  priceRanges,
  sortOptions,
} from '../../dummy-data/DummyData';
function AdvenceSearch() {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <PageTitle title="Advance Search" description="" />
      <Form
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        requiredMark={false}
      >
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <Form.Item
              label="Business Category"
              name="businessCategory"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select Business Category"
                options={categories.map((type) => ({
                  value: type,
                  label: type,
                }))}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Country"
              name="country"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select Country"
                options={countries.map((type) => ({
                  value: type,
                  label: type,
                }))}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <Form.Item
              label="Location"
              name="location"
              rules={[{ required: true }]}
            >
              <ConfigProvider>
                <Select
                  placeholder="Select Location"
                  options={location.map((type) => ({
                    value: type,
                    label: type,
                  }))}
                />
              </ConfigProvider>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Asking Price"
              name="priceRange"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select Price Range"
                options={priceRanges.map((range) => ({
                  value: range.value.join(' - '),
                  label: range.label,
                }))}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Form.Item>
              <Select
                placeholder="Select Business Type"
                options={businessTypes.map((type) => ({
                  value: type,
                  label: type,
                }))}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <Form.Item>
              <Select
                placeholder="Ownership Type"
                options={ownershipTypes.map((type) => ({
                  value: type,
                  label: type,
                }))}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              <Select
                placeholder="Short by"
                options={sortOptions.map((type) => ({
                  value: type.value,
                  label: type.label,
                }))}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default AdvenceSearch;
